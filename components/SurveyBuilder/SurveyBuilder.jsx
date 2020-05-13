import { Container, Grid, Hidden } from "@material-ui/core";
import _ from "lodash";
import React from "react";
import QuestionBuildBlocks from '../QuestionBuilder/QuestionBuildBlocks';
import QuestionBuildForm from "../QuestionBuilder/QuestionBuildForm";
import SurveyTitleForm from "./SurveyTitleForm";
import SurveyOptionsForm from './SurveyOptionsForm';
import SurveyBuilderActions from "./SurveyBuilderActions";
const uuid = require("uuid");

const SurveyBuilder = () => {
  const initialQuestion = {
    id: uuid.v4(),
    type: "free-text",
    number: "1",
    title: {
      text: "Untitled Question",
    },
    body: {
      rows: 5,
    },
  };
  const initialSurvey = {
    id: uuid.v4(),
    title: {
      text: "Untitled Survey",
      estimatedTime: "30min",
      questionCount: 1,
    },
    body: {
      questions: [initialQuestion],
      questionPerPage: 3,
      enableProgress: true,
    },
  };

  const [questionBlocks, setQuestionBlocks] = React.useState([]);
  const [survey, setSurvey] = React.useState(initialSurvey);
  const [questionTemplate, setQuestionTemplate] = React.useState(
    initialQuestion
  );

  const handleTitleUpdate = (surveyTitle) => {
    const newSurvey = _.cloneDeep(survey);
    newSurvey.title.text = surveyTitle;
    setSurvey(newSurvey);
  };
  const handleQuestionUpdates = (questions) => {

  };
  const handleActions = (event, senderID) => {
    switch (event) {
      case "AddPage": {
        //New page
      }
        break;
      case "AddSection": {
        //New Section          
      }
        break;
      case "Save": {
        //Save Survey        
      }
        break;
      case "Preview": {
        localStorage.setItem(survey.id, JSON.stringify(survey));
        window.open("http://localhost:3000/view?id=" + survey.id, "_blank");
        // Router.push({
        //   pathname: "/view",
        //   query: { id: survey.id },
        // });
      }
    }
  };
  const handlers = {
    updateQuestions: handleQuestionUpdates,
    updateTitle: handleTitleUpdate,
    handleActions: handleActions,
  };

  return (
    <div>
      <Container maxWidth="lg" style={{ marginBottom: '200px' }}>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={1}
        >

          <Grid item xs={12}>
            <SurveyTitleForm handlers={handlers}></SurveyTitleForm>
          </Grid>
          <Grid item xs={12} container direction="column">
            <QuestionBuildBlocks handler={handlers}></QuestionBuildBlocks>
          </Grid>
          <Grid item xs={12}>
            <SurveyBuilderActions eventHandler={handlers.handleActions}></SurveyBuilderActions>
          </Grid>
        </Grid>
      </Container>
      <SurveyOptionsForm></SurveyOptionsForm>
    </div>
  );
};

export default SurveyBuilder;
