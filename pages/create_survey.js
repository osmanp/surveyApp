import { Container } from "@material-ui/core";
import QuestionBuildBlocks from "../components/QuestionBuilder/QuestionBuildBlocks";
import SurveyOptionsForm from "../components/SurveyBuilder/SurveyOptionsForm";
import SurveyBuilder from "../components/SurveyBuilder/SurveyBuilder";
import Layout from '../components/Layout';
export default function Home() {
  // const survey = Surveys[0];
  // survey.body.questions=Questions;

  // const handlers = {
  //   updateQuestion: (q) => {setQuestion(q);},
  //   updateTitle: () => {},
  //   handleActions: () => {},
  // };
  // const initialQuestion = {
  //     id: 1,
  //     type: "select-multi",
  //     number: "1",
  //     title: {
  //       text: "Untitled Question",
  //       explanation: ""
  //     },
  //     body: {
  //       rows: [
  //         {
  //           label: "asdasd",
  //           id: 1
  //         },
  //         {
  //           label: "asdasdasdasd",
  //           id: 2
  //         }
  //       ],
  //       columns: [
  //         {
  //           label: "sadasdsa",
  //           id: 1
  //         },
  //         {
  //           label: "sadasdsaasdad",
  //           id: 2
  //         }
  //       ]
  //     }    
  // };
  // const [question,setQuestion] = React.useState(initialQuestion);
  // const [type,setType] = React.useState("liken-radio");
  // const [state,setState]=React.useState(4);
  // const handleClear = () =>{
  //   console.log('clear');
  //   let q = {
  //     id: 1,
  //     type: "select",
  //     number: "1",
  //     title: {
  //       text: "Untitled Question",
  //       explanation: ""
  //     },
  //     body: {
  //       rows: [         
  //         {
  //           label: "asdasdasdasd",
  //           id: 2
  //         }
  //       ],
  //       columns: [
  //         {
  //           label: "sadasdsa",
  //           id: 1
  //         },
  //         {
  //           label: "sadasdsaasdad",
  //           id: 2
  //         }
  //       ]
  //     } 
  //   };
    
  //   setQuestion(q);  
  //   //setType('single-select-radio');
  //   setState( 9);    
  // };
  return (
    <Layout>
 <Container style={{minHeight:'1200px'}}>
        {/* <QuestionContainer question={Questions[0]}></QuestionContainer>
        <QuestionContainer question={Questions[1]}></QuestionContainer>
        <QuestionContainer question={Questions[2]}></QuestionContainer>
        <QuestionContainer question={Questions[3]}></QuestionContainer>
        <QuestionContainer question={Questions[4]}></QuestionContainer>
        <QuestionContainer question={Questions[5]}></QuestionContainer> */}
{/* 
        <QuestionContainer question={Questions[6]}></QuestionContainer> */}

       {/* <SurveyContainer survey={survey}></SurveyContainer>     */}
       
       {/* <QuestionBuildBlocks questions={[]}  handler={{updateQuestions: (questions) => {console.log(questions);}}} ></QuestionBuildBlocks> */}
        <SurveyBuilder></SurveyBuilder>
   
   
      </Container>        
    </Layout>
     
  );
}