// import nextConnect from 'next-connect';
// import db from '../models/models';

// const uri = 'mongodb+srv://dbUser:hE0Oe4CNLLjKprma@surveyapp-wsilo.mongodb.net/test?retryWrites=true&w=majority';
// const localUri = 'mongodb://localhost:27017/surveyApp';
// db.mongoose.connect(localUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function database(req, res, next) {
//   if (db.mongoose.Collection.readyState != 1) throw new Error();
//   req.asd = "db.models";
//   return next();
// }

// const middleware = nextConnect();

// middleware.use(database);

// export default middleware;

