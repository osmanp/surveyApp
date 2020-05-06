import { Grid, makeStyles, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import DateTimeQuestionBody from "./QuestionBody/DateTimeQuestionBody";
import FreeTextQuestionBody from "./QuestionBody/FreeTextQuestionBody";
import SelectMultiQuestionBody from "./QuestionBody/SelectMultiQuestionBody";
import SelectSingleQuestionBody from "./QuestionBody/SelectSingleQuestionBody";
import SliderQuestionBody from "./QuestionBody/SliderQuestionBody";
import QuestionTitle from "./QuestionTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "4px",
    marginTop: "20px",
    border: "0.04rem solid #70757a",
    padding: '10px'
  },
  answerBox: {},
}));

const getAnswerType = (type, question) => {
  switch (type) {
    case "free-text":
      return <FreeTextQuestionBody body={question.body}></FreeTextQuestionBody>;
    case "select":
      return <SelectSingleQuestionBody body={question.body}></SelectSingleQuestionBody>;
    case "select-multi":
      return <SelectMultiQuestionBody body={question.body}></SelectMultiQuestionBody>;
    case "slider":
      return <SliderQuestionBody body={question.body}></SliderQuestionBody>;
    case "date-time":
      return <DateTimeQuestionBody body={question.body}></DateTimeQuestionBody>;
    default:
      break;
  }
};

const QuestionContainer = ({ question }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} variant="elevation" elevation={3} style={{ borderRadius: '20px',minWidth:'100%' }}>
      <Grid
        container
        direction="column"
        alignContent="stretch"
        justify="space-evenly"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item container xs={12}>
          <QuestionTitle question={question}></QuestionTitle>
        </Grid>
        <Grid item container xs={12}>
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
