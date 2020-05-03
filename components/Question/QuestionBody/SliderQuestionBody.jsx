import {
  makeStyles,
  Grid,
  Slider,
  Typography,
  Paper,
  FormControl,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  hover: {
    minWidth: "25px",
    minHeight: "25px",
    backgroundColor: "#b6becc",
    "&:hover": {
      backgroundColor: "#4d5c78",
    },
  },
  radio:{
    "&:hover": {
      backgroundColor: "#4d5c78",
    }
  },
  selectedGridItem: {
    backgroundColor: "#4d5c78",
  },
}));

const getRadioSlider = (step, min, max) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const handleClick = (index) => {
    if ((index) => min && index <= max) {
      setSelectedIndex(index);
    }
    if (index == selectedIndex) {
      setSelectedIndex(-1);
    }
  };
  const classes = useStyles();
  return (
    
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        {Array.from(Array(max  / step).keys()).map((element, index) => {
          return (
            <Grid item xs>
              <FormControlLabel
                control={<Radio size='medium'
                checked={selectedIndex === (element)}
                onChange={() => handleClick(index)}
                >
                </Radio>}
                label={element + min}
                labelPlacement='top'
                className={classes.radio}
              ></FormControlLabel>
            </Grid>
          );
        })}
      </Grid>    
  );
};

const getRatingSlider = (defaultValue, max) => {
  return <div style={{alignContent:'center'}}>
    <Rating defaultValue={defaultValue} max={max} ></Rating>;
  </div>
};

const getLineerSlider = (defaultValue, step, min, max) => {
  return (
    <Slider
      defaultValue={defaultValue ? defaultValue : 0}
      getAriaValueText={(value) => value}
      valueLabelDisplay="on"
      step={step ? step : 1}
      marks
      min={min ? min : 0}
      max={max ? max : 10}
    />
  );
};

const getGridSlider = (step, min, max) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const handleClick = (index) => {
    if ((index) => min && index <= max) {
      setSelectedIndex(index);
    }
    if (index == selectedIndex) {
      setSelectedIndex(-1);
    }
  };
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="row"
      spacing={1}
      alignItems="center"
      alignContent="center"
      justify="center"
    >
      {Array.from(Array(max  / step).keys()).map((element, index) => {
        return (
          <Grid item xs>
            <Paper elevation={2} onClick={() => handleClick(index)}>
              <Typography
                id="discrete-slider"
                gutterBottom
                align="center"
                className={clsx({
                  [classes.hover]: selectedIndex != index,
                  [classes.selectedGridItem]: selectedIndex == index,
                })}
                variant="subtitle1"
              >
                {element + min}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

const slider = (type, defaultValue, step, min, max) => {
  switch (type) {
    case "grid":
      return getGridSlider(step, min, max);
    case "lineer":
      return getLineerSlider(defaultValue, step, min, max);
    case "radio":
      return getRadioSlider(step, min, max);
    case "rating":
      return getRatingSlider(defaultValue, max);
    default:
      return getGridSlider(step, min, max);
      break;
  }
};

const SliderQuestionBody = ({ body }) => {
  return (
    <Grid item container xs justify="flex-start" alignItems="stretch" alignContent='center'>
      <Grid item xs={2}>
        <Typography variant="body2" gutterBottom align="center">
          {body ? body.minLabel : ""}
        </Typography>
      </Grid>
      <Grid item container xs={8} alignContent='center' alignItems='center' justify='center'>
        {body &&
          slider(
            body.variant,
            body.defaultValue,
            body.step,
            body.min,
            body.max
          )}
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2" gutterBottom align="center">
          {body ? body.maxLabel : ""}
        </Typography>
      </Grid>
    </Grid>
  );
};

SliderQuestionBody.propTypes = {
  body: PropTypes.object,
};

export default SliderQuestionBody;
