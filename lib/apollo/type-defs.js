import gql from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String
    surname: String!
    password:String
  }
  type QuestionTitle {
    text:String,
    explanation:String,
    image:String
  }
  type QuestionBody{
    variant:String
  }
  type Question{
    type: String,
    title: QuestionTitle
    body: QuestionBody
  }
  type Query {
    questions: [Question],
  }
`;
