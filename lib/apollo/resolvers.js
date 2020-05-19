import _ from 'lodash';




const saveSurvey = async(_parent,_args,_context,_info) => {
  
  console.log(_context);
  const {options,attributes,title,body} = _args;

  let savedQuestions = [];
  body.questions.forEach(element => {  
    var savedQuestion = _context.db.Questions.save(element);
    savedQuestions.push(savedQuestion);
  });

  var survey = new _context.db.Survey({
    attributes:attributes,
    options:options,
    title:title,
    body:{
      questions:savedQuestions.map(x => x._id),
      pageBreaks:body.pageBreaks,
      sections:body.sections      
    }
  });

  survey.save();

  return survey;
};

const saveUser = async(_parent,{username,password},_context,_info) => {  
  
  var newUser = new _context.db.User({
    username:username,
    password:password
  });
  newUser.save();
  return {username,password};
};

export const resolvers = {
  Query: {
    questions: async (_parent, _args, _context, _info) => {
      var question = await _context.db.Question.findOne({ type: 'free-text' });
      return  [{type: question.type} ];
    },
  },
  Mutation:{
    saveUser:saveUser,
    saveSurvey:saveSurvey
  }
};
