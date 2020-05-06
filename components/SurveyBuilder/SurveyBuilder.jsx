import { Container, Grid } from "@material-ui/core";
import _ from "lodash";
import React from "react";
import QuestionBuildForm from "../QuestionBuilder/QuestionBuildForm";
import SurveyTitleForm from "./SurveyTitleForm";
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

  const [questionBlocks,setQuestionBlocks] = React.useState([]);
  const [survey, setSurvey] = React.useState(initialSurvey);
  const [questionTemplate, setQuestionTemplate] = React.useState(
    initialQuestion
  );

  const handleTitleUpdate = (surveyTitle) => {
    const newSurvey = _.cloneDeep(survey);
    newSurvey.title.text = surveyTitle;
    setSurvey(newSurvey);
  };
  const handleQuestionUpdate = (question) => {
    const newQuestion = _.cloneDeep(question);
    setQuestionTemplate(newQuestion);
  };
  const handleActions = (event, senderID) => {    
    switch (event) {
      case "Add":
        {
          const newBlocks = Array.from(questionBlocks);
          const newQuestion = _.cloneDeep(questionTemplate);
          newQuestion.id = uuid.v4();
          newQuestion.number = newBlocks.findIndex(s => s.question.id == senderID) + 1;          

          newBlocks.push({state:'view', question:newQuestion});
          for(var i = 0 ; i <  newBlocks.length ; i++){
            const currentNumber = newBlocks[i].question.number;
            if(currentNumber <= newQuestion.number){
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
    updateQuestion: handleQuestionUpdate,
    updateTitle: handleTitleUpdate,
    handleActions: handleActions,
  };

  return (
    <Container maxWidth="md" style={{ marginBottom: "1200px" }}>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        alignContent="stretch"
        justify="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <SurveyTitleForm handlers={handlers}></SurveyTitleForm>
        </Grid>
        <Grid item xs={12} container direction="column">
          <Container maxWidth="md">
            {survey.body.questions.map((element, index) => {
              return (
                <QuestionBuildForm key={index} state={'view'} question={element} templateType={'short-answer'} handlers={handlers} >

                </QuestionBuildForm>
              );
            })}
          </Container>

          <Grid item xs>
            <QuestionBuildForm state={'edit'} question={questionTemplate} templateType={'short-answer'} handlers={handlers} >
            </QuestionBuildForm>
          </Grid>

        </Grid>
      </Grid>
    </Container>
  );
};

export default SurveyBuilder;
