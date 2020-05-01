import PropTypes from "prop-types";
import React from "react";
import { Grid, TextField, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: "24px",
    flexGrow: 1,
    flexFlow: 1,
  },
}));

const QuestionTitle = ({ question }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
      {question.title.image ? (
          <Grid item xs={11}>
            <div style={{ textAlign: 'center' }}>
              <img src={question.title.image}></img>
            </div>
          </Grid>
        ) : null}
        <Grid container item direction="row">
          <Grid item xs={1}>
            <Typography variant="h6" align="left">
              <b>{"Q" + question.number + "."}</b>
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h6"
              align="left"
              style={{ marginLeft: "-20px" }}
            >
              {question.title.text}
            </Typography>
            {question.title.explanation ? (
              <Typography variant="subtitle1" align="left">
                {"(" + question.title.explanation + ")"}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
       
      </Grid>
    </div>
  );
};

QuestionTitle.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string,
    number: PropTypes.string,
  }),
};

export default QuestionTitle;
