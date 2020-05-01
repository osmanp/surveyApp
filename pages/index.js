import { Container } from "@material-ui/core";
import SurveyContainer from "../components/Survey/SurveyContainer";
import Questions from "../data/questions";
import Surveys from "../data/survey";
import SliderAnswerOptions from "../components/SurveyBuilder/SliderAnswerOptions";
import SelectAnswerOptions from "../components/SurveyBuilder/SelectAnswerOptions";
import QuestionForm from "../components/SurveyBuilder/QuestionForm";
import QuestionContainer from '../components/Question/QuestionContainer'
import SelectMultiQuestionBody from "../components/Question/QuestionBody/SelectMultiQuestionBody";

export default function Home() {
  return (
      <Container >
        {/* <QuestionContainer question={Questions[0]}></QuestionContainer>
        <QuestionContainer question={Questions[1]}></QuestionContainer>
        <QuestionContainer question={Questions[2]}></QuestionContainer>
        <QuestionContainer question={Questions[3]}></QuestionContainer>
        <QuestionContainer question={Questions[4]}></QuestionContainer>
        <QuestionContainer question={Questions[5]}></QuestionContainer> */}
{/* 
        <QuestionContainer question={Questions[6]}></QuestionContainer> */}

          <SurveyContainer survey={Surveys[0]} questions={Questions}></SurveyContainer>   
         {/* <QuestionForm></QuestionForm>  */}
         
      </Container>    
  );
}
