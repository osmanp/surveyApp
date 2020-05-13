import { ApolloServer } from 'apollo-server-micro';
import { MongoClient } from 'mongodb';
import { schema } from '../../lib/apollo/schema';


const client = new MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const applyDB = async () => {
  let context = {
    db: null,
    dbClient: null
  };
  if (!client.isConnected()) await client.connect();
  context.dbClient = client;
  context.db = client.db('surveyApp');
  return context;
};


const apolloServer = new ApolloServer({ schema, context: applyDB });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
