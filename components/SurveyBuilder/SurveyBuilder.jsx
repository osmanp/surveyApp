import { Container, Grid } from "@material-ui/core";
import React from "react";
import SurveyBody from "../Survey/SurveyBody";
import SurveyTitle from "../Survey/SurveyTitle";

const SurveyBuilder = ({ survey, questions }) => {
    const [progress,setProgress] = React.useState(0);
    const handleProgress = (progress) => {
        
        setProgress(progress);
    } 
  return (
    <Container maxWidth='lg'>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <SurveyTitle survey={survey} progress={progress}></SurveyTitle>
        </Grid>
        <Grid item xs>
          <SurveyBody survey={survey} questions={questions} progressChanged={handleProgress}></SurveyBody>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SurveyBuilder;
