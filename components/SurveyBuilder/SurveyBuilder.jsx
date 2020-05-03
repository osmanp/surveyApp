import { Container, Grid } from "@material-ui/core";
import React from "react";
import SurveyTitleForm from "./SurveyTitleForm";
import QuestionForm from "./QuestionForm";

const SurveyBuilder = () => {
  const handleTitleUpdate = (surveyTitle) => {

  }
  const handleQuestionUpdate = (question) => {

  }
  const handlers = {
    updateQuestion:handleQuestionUpdate,
    updateTitle:handleTitleUpdate
  }
  return (
    <Container maxWidth='lg'>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <SurveyTitleForm handlers={handlers}></SurveyTitleForm>
        </Grid>
        <Grid item xs>
          <QuestionForm handlers={handlers}></QuestionForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SurveyBuilder;
