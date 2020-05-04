import { Container, Grid } from "@material-ui/core";
import _ from "lodash";
import React from "react";
import QuestionContainer from "../Question/QuestionContainer";
import QuestionForm from "./QuestionForm";
import SurveyBuilderSpeedDial from "./SurveyBuilderSpeedDial";
import SurveyTitleForm from "./SurveyTitleForm";
const uuid = require("uuid");
import Router from "next/router";

const SurveyBuilder = () => {
  const initialQuestion = {
    id: 1,
    type: "free-text",
    number: "1",
    title: {
      text: "Untitle Question",
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
      questions: [],
      questionPerPage: 3,
      enableProgress: true,
    },
  };
  const [survey, setSurvey] = React.useState(initialSurvey);
  const [questionTemplate, setQuestionTemplate] = React.useState(
    initialQuestion
  );

  const handleTitleUpdate = (surveyTitle) => {
    const newSurvey = _.cloneDeep(survey);
    newSurvey.title.text = surveyTitle;
    setSurvey(newQuestion);
  };
  const handleQuestionUpdate = (question) => {
    const newQuestion = _.cloneDeep(question);
    setQuestionTemplate(newQuestion);
  };
  const handleActions = (event) => {
    switch (event) {
      case "AddQuestion":
        {
          const newQuestions = Array.from(survey.body.questions);
          const newQuestion = _.cloneDeep(questionTemplate);
          newQuestion.id = uuid.v4();
          if(hovering <= 0 ){
            newQuestion.number = survey.body.questions.length + 1;
            newQuestions.push(newQuestion);
          }
          else {
            newQuestion.number = hovering + 1;
            newQuestions.splice(hovering,0,newQuestion);
          }
          
          const newSurvey = _.cloneDeep(survey);
          newSurvey.body.questions = Array.from(newQuestions);
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
      default:
        break;
    }
  };
  const handlers = {
    updateQuestion: handleQuestionUpdate,
    updateTitle: handleTitleUpdate,
    handleActions: handleActions,
  };

  const [hovering, setHovering] = React.useState(0);
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
                <div
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHovering(index + 1)}
                  onMouseLeave={() => setHovering(-1)}
                >
                  <Grid item xs>
                    <QuestionContainer question={element}></QuestionContainer>
                  </Grid>
                  {hovering === (index + 1) ? (
                    <Grid item xs>
                      <SurveyBuilderSpeedDial
                        eventHandler={handleActions}
                      ></SurveyBuilderSpeedDial>
                    </Grid>
                  ) : null}
                </div>
              );
            })}
          </Container>

          <Grid item xs>
            <div
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHovering(0)}
              onMouseLeave={() => setHovering(-1)}
            >
              <QuestionForm
                handlers={handlers}
                questionTemplate={questionTemplate}
              ></QuestionForm>
               {hovering == 0 ? (
            
              <SurveyBuilderSpeedDial
                eventHandler={handleActions}
              ></SurveyBuilderSpeedDial>
            
          ) : null}
            </div>
          </Grid>
         
        </Grid>
      </Grid>
    </Container>
  );
};

export default SurveyBuilder;
