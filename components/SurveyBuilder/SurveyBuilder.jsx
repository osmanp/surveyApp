import { Container, Grid, Hidden } from "@material-ui/core";
import _ from "lodash";
import React from "react";
import QuestionBuildBlocks from '../QuestionBuilder/QuestionBuildBlocks';
import QuestionBuildForm from "../QuestionBuilder/QuestionBuildForm";
import SurveyTitleForm from "./SurveyTitleForm";
import SurveyOptionsForm from './SurveyOptionsForm';
import SurveyBuilderSpeedDial from "./SurveyBuilderSpeedDial";
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
      case "Add":
        {
          const newBlocks = Array.from(questionBlocks);
          const newQuestion = _.cloneDeep(questionTemplate);
          newQuestion.id = uuid.v4();
          newQuestion.number = newBlocks.findIndex(s => s.question.id == senderID) + 1;

          newBlocks.push({ state: 'view', question: newQuestion });
          for (var i = 0; i < newBlocks.length; i++) {
            const currentNumber = newBlocks[i].question.number;
            if (currentNumber <= newQuestion.number) {
              newBlocks[i].question.number++;
            }
          }

          setQuestionBlocks(newBlocks);
          const newSurvey = _.cloneDeep(survey);
          newSurvey.body.questions = Array.from(newBlocks.map(x => x.question));
          setSurvey(newSurvey);
        }
        break;
      case "Copy":
        {
          const newQuestions = Array.from(survey.body.questions);
          const newQuestion = _.cloneDeep(questionTemplate);
          newQuestion.id = uuid.v4();
          newQuestion.number = survey.body.questions.length + 1;
          newQuestions.push(newQuestion);

          const newSurvey = _.cloneDeep(survey);
          newSurvey.body.questions = Array.from(newQuestions);
          setSurvey(newSurvey);
        }
        break;
      case "Delete": {
        if (survey.body.questions.length > 1) {
          const newSurvey = _.cloneDeep(survey);
          newSurvey.body.questions.splice(newSurvey.body.questions.length, 1);
          setSurvey(newSurvey);
        }
        break;
      }
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

      
      <Container maxWidth="lg" style={{marginBottom:'200px'}}>
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
            <SurveyBuilderSpeedDial eventHandler={handlers.handleActions}></SurveyBuilderSpeedDial>
          </Grid>
        </Grid>
      </Container>
      <SurveyOptionsForm></SurveyOptionsForm>
    </div>
  );
};

export default SurveyBuilder;
