import mongoose,{Schema} from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { ObjectID } from 'mongodb';



const QuestionTitleSchema = new Schema({
    text:{
        type:String,
        trim:true,
        default:'Untitled Question'
    },
    explanation:{
        type:String,
        trim:true,
        required:false
    },
    image:Buffer
});

const QuestionBodySchema = new Schema({
    //Free text body
    rowCount:{
        type:Number,
        default:5        
    },
    helperText:{
        type:String,
        trim:true
    },
    //Select body
    allowMultiple:{
        type:Boolean,
        default:false
    },
    options:[{
        label:String,
        value:Number,
        id:Number,
        other:Boolean
    }],
    //Slider
    variant:String,
    defaultValue:Number,
    min:Number,
    max:Number,
    step:Number,
    minLabel:String,
    maxLabel:String,
    //Multi select
    rows:[{ 
            label:String,
            value:Number,
            index:Number,
            other:Boolean
        }
    ],
    columns:[{
        label:String,
        value:Number,
        index:Number,
        other:Boolean
    }]
});

const QuestionSchema = new Schema({
    type:{
        type:String,
        enum:['free-text','select','slider','select-multi','date-time'],
        default:'free-text'
    },
    title: QuestionTitleSchema,
    body: QuestionBodySchema
});

QuestionSchema.plugin(timestamps);

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
});

UserSchema.plugin(timestamps);

const SurveyAttributesSchema = new Schema({
    comments:Number,
    rating:Number,
    category:{
        type:String,
        enum:["Academic","General","Medical Research","Opinion Polls","Politics","Economy","Other"]
    },
    questionCount:Number,
    responseCount:Number,
    isPublic:Boolean
});

const SurveyTitleOptionsSchema = new Schema({
    showEstimatedTime:Boolean,
    estimatedTime:Number,
    showQuestionCount:Boolean,
    showProgressBar:Boolean
});

const SurveyTitleSchema = new Schema({
    text:{
        type:String,
        default:'Untitled Survey',
        trim:true
    },
    estimatedTime:Number,
    description:String,    
    options:SurveyTitleOptionsSchema
});


const SurveyBodySchema = new Schema({
    questions:[ObjectID],
    sections:[ObjectID],
    pageBreaks:[ObjectID]    
});


const SurveyOptionsSchema = new Schema({
    theme:String,
    autoPagination:Boolean,
    questionPerPage:Number,
    backgroundColor:String
});

const SurveySchema = new Schema({
    user:ObjectID,
    attributes:SurveyAttributesSchema,
    title:SurveyTitleSchema,
    body:SurveyBodySchema,
    options:SurveyOptionsSchema
});

SurveySchema.plugin(timestamps);

mongoose.models = {};
module.exports = {
    QuestionTitle: mongoose.models.QuestionTitle || mongoose.model('questionTitles',QuestionTitleSchema),
    QuestionBody: mongoose.models.QuestionBody || mongoose.model('questionBodies',QuestionBodySchema),
    Question: mongoose.models.Question || mongoose.model('questions',QuestionSchema),
    // User: mongoose.model('users',UserSchema),
    // SurveyTitle:  mongoose.model('surveyTitles',SurveyTitleSchema),
    // SurveyTitleOptions:  mongoose.model('surveyTitleOptions',SurveyTitleOptionsSchema),
    // SurveyBody:  mongoose.model('surveyBodies',SurveyBodySchema),
    // SurveyOption:  mongoose.model('surveyOptions',SurveyOptionsSchema),
    // Survey:mongoose.model('surveys',SurveySchema)
};