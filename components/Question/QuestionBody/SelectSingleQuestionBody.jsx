import {
  makeStyles,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Paper,
  Checkbox
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  hover: {
    "&:hover": {
      backgroundColor: "#b6becc",
    },
  },
}));

const controlType = (isMulti,elementValue) => {
  if(isMulti){
    return <Checkbox value={elementValue} />
  }
  return <Radio />
}

const SelectSingleQuestionBody = ({ body }) => {
 
  const [value, setValue] = React.useState(null);
  const classes = useStyles();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup  value={value} onChange={handleChange}>
        {body ? body.options.map((element, index) => {
          return (
            <Paper key={index} elevation={0} className={classes.hover}>
              <FormControlLabel
                key={index}
                value={element.value}
                label={element.label}
                control={controlType(body.allowMultiple,element.value)}
              />
            </Paper>
          );
        }) : null}
      </RadioGroup>
    </FormControl>
  );
};

SelectSingleQuestionBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.object),
};

export default SelectSingleQuestionBody;
