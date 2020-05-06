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
    <>
    {
      body.variant == 'short' ? 
      <div className={classes.root} style={{minWidth:'100%', textAlign:'center'}}>      
          <TextField
            variant="standard"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            fullWidth
            helperText={body.description}
            style={{ maxWidth: "90%",marginBottom:'5px' }}
          />      
      </div>
      : 
      <div className={classes.root} style={{minWidth:'100%', textAlign:'center'}}>      
          <TextField
            variant="outlined"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            multiline
            fullWidth
            helperText={body.description}
            rows={body.rowCount ? body.rowCount : 10}
            style={{ maxWidth: "90%" ,marginBottom:'5px'}}
          />      
    </div>
    } 
    </>   
  );
};

FreeTextQuestionBody.propTypes = {
  body: PropTypes.shape({    
    rows:PropTypes.number,
    description:PropTypes.string
  }),
};

export default FreeTextQuestionBody;
