import { Container, Typography } from "@material-ui/core";
import Layout from '../components/Layout';
import SurveyFilter from "../components/Common/SurveyFilter";
import TemplateCard from "../components/SurveyTemplates/TemplateCard";
import Surveys from '../data/survey';
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
      <Container style={{ minHeight: '1200px' }}>
        <SurveyFilter options={{showRatings:true}}></SurveyFilter>
        <TemplateCard survey={Surveys[0]}></TemplateCard>
      </Container>
    </Layout>

  );
}