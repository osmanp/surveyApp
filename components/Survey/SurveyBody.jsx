import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import QuestionContainer from "../Question/QuestionContainer";

const QuestionSlide = ({
  questions,
  page,
  handleBack,
  handleNext,
  lastPage,
}) => {
  return (
    <div page={page}>
      <Grid container direction="column">
        <Grid item xs>
          {questions.map((element, index) => {
            return <QuestionContainer key={index} question={element}></QuestionContainer>;
          })}
        </Grid>
        <Grid item xs style={{ marginTop: "50px" }}>
          <Grid item container direction="row" justify="stretch">
            <Grid item xs={6}>
              {page > 0 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBack}
                >
                  {"< Back"}
                </Button>
              ) : null}
            </Grid>
            <Grid item container xs={6} justify="flex-end">
              {!lastPage ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {"Next >"}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {"Submit"}
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const SurveyBody = ({ survey, progressChanged }) => {
  const pageCount = Math.ceil(
    survey.body.questions.length / survey.body.questionPerPage
  );

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = pageCount;
  progressChanged(((activeStep + 1) / maxSteps) * 100);
  const handleNext = () => {
    window.scrollTo(0, 0);
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
    <Container maxWidth='md'>
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
                  key={index}
                  questions={survey.body.questions.slice(
                    index * survey.body.questionPerPage,
                    index * survey.body.questionPerPage +
                      survey.body.questionPerPage
                  )}
                  page={index}
                  handleBack={handleBack}
                  handleNext={handleNext}
                  lastPage={index == (pageCount - 1)}
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
