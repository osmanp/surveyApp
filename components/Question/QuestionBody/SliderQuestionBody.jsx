import { makeStyles, Grid, Slider, Typography, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import clsx from 'clsx'

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
  selectedGridItem:{
    backgroundColor: "#4d5c78",
  }
}));

const getGridSlider = (step, min, max) => {
  const [selectedIndex,setSelectedIndex] = React.useState(-1);
  const handleClick = (index) => {
    if(index => min && index <= max){
      setSelectedIndex(index);
    }
    if(index == selectedIndex){
      setSelectedIndex(-1);
    }
  }
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
      {Array.from(Array(max - min / step).keys()).map((element, index) => {
        return (
          <Grid item xs>
            <Paper elevation={2} onClick={() => handleClick(index)}>
              <Typography
                id="discrete-slider"
                gutterBottom
                align="center"
                className={classes.hover} 
                className={clsx({
                  [classes.hover]:selectedIndex != index,
                  [classes.selectedGridItem]:selectedIndex == index,
                })}       
                variant='subtitle1'
              >
                {element}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

const SliderQuestionBody = ({ body }) => {
  return (
    // <Grid container direction="column">
      <Grid item container xs justify="flex-start" alignItems="stretch">
        <Grid item xs={2}>
          <Typography variant='body2' gutterBottom align='center'>
            {body ? body.minLabel : ""}
          </Typography>
        </Grid>
        <Grid item xs={8}>
        {body && body.variant == 'discrete' ? (
          getGridSlider(
            body.step,
            body.min,
            body.max
          )
        ) : (
          <Slider
            defaultValue={body ? body.defaultValue : 0}
            getAriaValueText={(value) => value}
            valueLabelDisplay="on"
            step={body ? body.step : 1}
            marks
            min={body ? body.min : 0}
            max={body ? body.max : 100}
          />
        )}
        </Grid>
        <Grid item xs={2}>
          <Typography  variant='body2' gutterBottom align="center">
            {body ? body.maxLabel : ""}
          </Typography>
        </Grid>
      </Grid>
      // <Grid item xs>
      
      // </Grid>
    // </Grid>
  );
};

SliderQuestionBody.propTypes = {
  body: PropTypes.object,
};

export default SliderQuestionBody;
