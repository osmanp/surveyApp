import {
  makeStyles,
  Radio,
  Select,
  InputLabel,
  MenuItem,
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

const controlType = (variant, elementValue) => {
  if (variant == 'checkbox') {
    return <Checkbox value={elementValue} />;
  }
  return <Radio />;
};

const getCheckBoxBody = (variant) => {

};

const SelectSingleQuestionBody = ({ body }) => {

  const [value, setValue] = React.useState(null);
  const classes = useStyles();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" style={{ marginLeft: '6%' }}>

      {
        body.variant == 'dropdown' ?
          <>
            <Select
              id="select"
              value={value}
              style={{minWidth:'100px'}}
              fullWidth
              onChange={handleChange}
            >
              {body ? body.rows.map((element, index) => {
                return (
                  <MenuItem key={index} value={element.value}>{element.label}</MenuItem>
                );
              }) : null}
            </Select>
          </>
          :
          <RadioGroup value={value} onChange={handleChange}>
            {body ? body.rows.map((element, index) => {
              return (
                <Paper key={index} elevation={0} className={classes.hover}>
                  <FormControlLabel
                    key={index}
                    value={element.value}
                    label={element.label}
                    control={controlType(body.variant, element.value)}
                  />
                </Paper>
              );
            }) : null}
          </RadioGroup>
      }


    </FormControl>
  );
};

SelectSingleQuestionBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.object),
};

export default SelectSingleQuestionBody;
