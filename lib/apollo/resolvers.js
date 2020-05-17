export const resolvers = {
  Query: {
    questions: async (_parent, _args, _context, _info) => {
      var question = await _context.db.Question.findOne({ type: 'free-text' });
      return  [{type: question.type} ];
    },
  },
};
