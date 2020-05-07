import { Container } from "@material-ui/core";
import Layout from '../components/Layout';
import SurveyBuilder from "../components/SurveyBuilder/SurveyBuilder";
export default function Home() {

  return (
    <Layout>
     <Container style={{minHeight:'1200px'}}>
       <SurveyBuilder></SurveyBuilder>
    </Container>        
    </Layout>
     
  );
}