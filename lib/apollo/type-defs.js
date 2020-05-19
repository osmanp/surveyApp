import gql from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!,
    name: String,
    surname: String!,
    password:String,
    surveys:[ID]
  }
  type QuestionTitle {
    text:String,
    explanation:String,
    image:String
  }

  input QuestionTitleInput {
    text:String,
    explanation:String,
    image:String
  }

  type QuestionBodyOptions{
    label:String,
    value:Int,
    id: Int,
    other:Boolean
  }

  input QuestionBodyOptionsInput{
    label:String,
    value:Int,
    id: Int,
    other:Boolean
  }

  type QuestionBody{
    variant:String,
    rowCount:Int,
    helperText:String,
    allowMultiple:Boolean,
    options:[QuestionBodyOptions],    
    defaultValue: Int,
    min:Int,
    max:Int,
    step:Int,
    minLabel:String,
    maxLabel:String,
    rows:[QuestionBodyOptions],
    columns:[QuestionBodyOptions]
  }

  input QuestionBodyInput{
    variant:String,
    rowCount:Int,
    helperText:String,
    allowMultiple:Boolean,
    options:[QuestionBodyOptionsInput],    
    defaultValue: Int,
    min:Int,
    max:Int,
    step:Int,
    minLabel:String,
    maxLabel:String,
    rows:[QuestionBodyOptionsInput],
    columns:[QuestionBodyOptionsInput]
  }

  type Question{
    id:ID!
    type: String,
    title: QuestionTitle
    body: QuestionBody
  }

  input QuestionInput{
    id:ID!
    type: String,
    title: QuestionTitleInput
    body: QuestionBodyInput
  }
  
  type SurveyAttributes{
    comments:Int,
    rating:Float,
    category:String,
    questionCount:Int,
    responseCount:Int,
    isPublic:Boolean
  }

  input SurveyAttributesInput{
    comments:Int,
    rating:Float,
    category:String,
    questionCount:Int,
    responseCount:Int,
    isPublic:Boolean
  }

  type SurveyTitleOptions{
    showEstimatedTime:Boolean,
    estimatedTime:Int,
    showQuestionCount:Boolean,
    showProgressBar:Boolean
  }
  input SurveyTitleOptionsInput{
    showEstimatedTime:Boolean,
    estimatedTime:Int,
    showQuestionCount:Boolean,
    showProgressBar:Boolean
  }
  type SurveyTitle{
    estimatedTime:Int,
    description:String,    
    options:SurveyTitleOptions
  }
  input SurveyTitleInput{
    estimatedTime:Int,
    description:String,    
    options:SurveyTitleOptionsInput
  }
  type SurveyBody{
    questions:[Question],
    sections:[Int],
    pageBreaks:[Int]
  }
  input SurveyBodyInput{
    questions:[QuestionInput],
    sections:[Int],
    pageBreaks:[Int]
  }
  type SurveyOptions{
    theme:String,
    autoPagination:Boolean,
    questionPerPage:Int,
    backgroundColor:String
  }

  input SurveyOptionsInput{
    theme:String,
    autoPagination:Boolean,
    questionPerPage:Int,
    backgroundColor:String
  }

  type Survey{    
    id:ID,
    attributes:SurveyAttributes,
    title:SurveyTitle,
    body:SurveyBody,
    options:SurveyOptions
  }

  type Query {
    questions: [Question],
    surveys:[Survey]
  }

  type Mutation {
    saveUser(username:String,password:String):User,
    saveSurvey(options:SurveyOptionsInput,attributes:SurveyAttributesInput,title:SurveyTitleInput,body:SurveyBodyInput):Survey
  }
`;
