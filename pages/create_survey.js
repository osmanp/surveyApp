import { useMutation } from '@apollo/react-hooks';
import { Container } from "@material-ui/core";
import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo/client';
import Layout from '../components/Layout';
import SurveyBuilder from "../components/SurveyBuilder/SurveyBuilder";


const Save_Survey = gql`
  mutation SaveSurvey($options:SurveyOptionsInput,$attributes:SurveyAttributesInput,$title:SurveyTitleInput,$body:SurveyBodyInput){
    saveSurvey(options:$options,attributes:$attributes,body:$body,title:$title){id}
  }

`;

const  CreateSurveyPage = () => {
  const [saveSurvey,{data}] = useMutation(Save_Survey);
  const pageHandler = {
    onActionClick: async (action,survey) => {
      //console.log(survey);
      var result = await saveSurvey({variables: {options:{}, title:{},body:{questions:[]},attributes:{} }});
      console.log(result);
      console.log(data);
    }
  };
  return (
    <Layout>
        <Container style={{minHeight:'1200px'}}>
        <SurveyBuilder pageHandler={pageHandler}></SurveyBuilder>   
      </Container>        
    </Layout>
     
  );
};


export default withApollo(CreateSurveyPage);