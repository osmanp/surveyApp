import { ApolloServer } from 'apollo-server-micro';
import mongoose from 'mongoose';
import { schema } from '../../lib/apollo/schema';
import models from '../../models/models';

const uri = 'mongodb+srv://dbUser:hE0Oe4CNLLjKprma@surveyapp-wsilo.mongodb.net/test?retryWrites=true&w=majority';
const localUri = 'mongodb://localhost:27017/surveyApp';
mongoose.connect(localUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true  ,  
});


const applyDB = async () => {  
  if (!mongoose.connection.readyState != 1) {
    await mongoose.connect(localUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true  
    });
  };    
  return {db : models};
};


// const client = new MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });



// const applyDB = async () => {
//   let context = {
//     db: null,
//     dbClient: null
//   };
//   if (!client.isConnected()) await client.connect();
//   context.dbClient = client;
//   context.db = client.db('surveyApp');
//   return context;
// };


const apolloServer = new ApolloServer({ schema, context: applyDB });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
