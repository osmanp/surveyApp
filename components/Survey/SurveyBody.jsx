import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import QuestionContainer from "../Question/QuestionContainer";

const QuestionSlide = ({ questions, page, handleBack, handleNext }) => {
  return (
    <div page={page}>
      <Grid container direction="column" >
        <Grid item xs>
          {questions.map((element, index) => {
            return <QuestionContainer question={element}></QuestionContainer>;
          })}
        </Grid>
        <Grid item xs style={{marginTop:'20px'}}>
          <Grid item container direction="row" justify="stretch">
            <Grid item xs={6}>
              <Button variant="contained" color="primary" onClick={handleBack}>
                {"< BACK"}
              </Button>
            </Grid>
            <Grid item container xs={6} justify="flex-end">
              <Button variant="contained" color="primary" onClick={handleNext}>
                {"NEXT >"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const SurveyBody = ({ survey, questions, progressChanged }) => {
  const pageCount = Math.ceil(
    survey.body.questions.length / survey.body.questionPerPage
  );

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = pageCount;
  progressChanged(((activeStep + 1) / maxSteps) * 100);
  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep(activeStep + 1);
      progressChanged(((activeStep + 1) / maxSteps) * 100);
    }
  };

  const handleBack = () => {
    if (activeStep >= 1) {
      setActiveStep(activeStep - 1);
      progressChanged(((activeStep - 1) / maxSteps) * 100);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Grid container direction="column" spacing={3}>
        <Grid item xs>
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {Array.from(Array(pageCount).keys()).map((element, index) => {
              return (
                <QuestionSlide
                  questions={questions.slice(
                    index * survey.body.questionPerPage,
                    index * survey.body.questionPerPage +
                      survey.body.questionPerPage
                  )}
                  page={index}
                  handleBack={handleBack}
                  handleNext={handleNext}
                />
              );
            })}
          </SwipeableViews>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SurveyBody;
