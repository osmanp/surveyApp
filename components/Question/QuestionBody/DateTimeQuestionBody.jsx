import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const DateTimeQuestionBody = ({ body }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ minWidth: "100%", textAlign: "center" }}
    >
      {body.type == "date" ? (
        <TextField
          id="date"
          label={body.label}
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      ) : (
        <TextField
          id="date"
          label={body.label}
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    </div>
  );
};

DateTimeQuestionBody.propTypes = {
  body: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default DateTimeQuestionBody;
