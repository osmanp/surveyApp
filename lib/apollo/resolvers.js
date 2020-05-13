export const resolvers = {
    Query: {
      viewer : async (_parent, _args, _context, _info) => {
        var onecomment = await  _context.db.collection("users").findOne({});
        console.log(onecomment);
        return { id: 1, name: onecomment.name, status: 'cached' };
      },
    },
  };
  