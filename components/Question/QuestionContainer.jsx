import PropTypes from "prop-types";
import React from "react";
import {
  Grid,
  TextField,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import QuestionTitle from "./QuestionTitle";
import FreeTextQuestionBody from "./QuestionBody/FreeTextQuestionBody";
import SelectSingleQuestionBody from "./QuestionBody/SelectSingleQuestionBody";
import SelectMultiQuestionBody from "./QuestionBody/SelectMultiQuestionBody";
import SliderQuestionBody from "./QuestionBody/SliderQuestionBody";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px",
    margin: "4px",
    marginTop: "20px",
    border: "0.04rem solid #70757a",
  },
  answerBox: {},
}));

const getAnswerType = (type, question) => {
  switch (type) {
    case "free-text":
      return <FreeTextQuestionBody body={question.body}></FreeTextQuestionBody>;
    case "select":
      return <SelectSingleQuestionBody body={question.body}></SelectSingleQuestionBody>
    case "select-multi":
      return <SelectMultiQuestionBody body={question.body}></SelectMultiQuestionBody>
    case "slider":
      return <SliderQuestionBody body={question.body}></SliderQuestionBody>;
    case "date-teim":
      return <DateTimeQuestionBody body={question.body}></DateTimeQuestionBody>
    default:
      break;
  }
};

const QuestionContainer = ({ question }) => {
  const classes = useStyles();
  console.log(question);
  return (
    <Paper className={classes.root} variant="elevation" elevation={3}>
      <Grid
        container
        direction="column"
        alignContent="stretch"
        justify="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item container xs>
          <QuestionTitle question={question}></QuestionTitle>
        </Grid>
        <Grid item container xs >
          {getAnswerType(question.type, question)}
        </Grid>
      </Grid>
    </Paper>
  );
};

QuestionContainer.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string,
    answerOptions: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default QuestionContainer;
