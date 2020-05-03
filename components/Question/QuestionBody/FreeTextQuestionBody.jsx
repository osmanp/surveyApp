import { makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

const FreeTextQuestionBody = ({ body }) => {
  const classes = useStyles();
  const [userAnswer, setUserAnswer] = React.useState();
  return (
    <div className={classes.root} style={{minWidth:'100%', textAlign:'center'}}>      
          <TextField
            variant="outlined"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            multiline
            fullWidth
            helperText={body.helperText}
            rows={body.rows ? body.rows : 10}
            style={{ maxWidth: "90%" }}
          />      
    </div>
  );
};

FreeTextQuestionBody.propTypes = {
  body: PropTypes.shape({    
    rows:PropTypes.number,
    helperText:PropTypes.string
  }),
};

export default FreeTextQuestionBody;
