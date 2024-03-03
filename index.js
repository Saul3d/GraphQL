import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

const root = {product: () =>{
  return {
    "id": 247594,
    "name": "widget",
    "description": "Description of the widget",
    "price": 34.99,
    "soldout": false,
    "stores": [
      {store: "Pasadena"},
      {store: "Los Angeles"},
    ],
  }
}};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,

}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));