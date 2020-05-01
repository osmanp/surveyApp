import { Container, Grid } from "@material-ui/core";
import React from "react";
import SurveyBody from "./SurveyBody";
import SurveyTitle from "./SurveyTitle";

const SurveyContainer = ({ survey, questions }) => {
    const [progress,setProgress] = React.useState(0);
    const handleProgress = (progress) => {
        
        setProgress(progress);
    } 
  return (
    <Container maxWidth='md'>
      <Grid container direction="column" alignContent='stretch' justify='center' alignItems='stretch' spacing={2}>
        <Grid item xs >
          <SurveyTitle survey={survey} progress={progress}></SurveyTitle>
        </Grid>
        <Grid item xs >
          <SurveyBody survey={survey} questions={questions} progressChanged={handleProgress}></SurveyBody>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SurveyContainer;
