import { FormControl, Grid, TextField } from "@material-ui/core";
import _ from "lodash";
import React from "react";

const SliderAnswerOptions = ({ type, initialOptions, optionsChanged }) => {
  
  const initialState = {
    defaultValue: initialOptions.defaultValue || 5,
    min: initialOptions.min || 1,
    max: initialOptions.max || 10,
    step: initialOptions.step || 1,
    minLabel: initialOptions.minLabel || "Not happy",
    maxLabel: initialOptions.maxLabel || "Very Happy",
    variant: (type ? type.replace('-slider', '') : 'grid') 
  };

  React.useEffect(() => {
    setMinval(initialState.min);
    setMaxVal(initialState.max);
    setMinLabel(initialState.minLabel);
    setMaxLabel(initialState.maxLabel);
    setDefaultVal(initialState.defaultValue);
    setStepVal(initialState.step);    
  }, [initialOptions]);

  

  const [minVal, setMinval] = React.useState(initialState.min);
  const [maxVal, setMaxVal] = React.useState(initialState.max);
  const [defaultVal, setDefaultVal] = React.useState(initialState.defaultValue);
  const [minLabel, setMinLabel] = React.useState(initialState.minLabel);
  const [maxLabel, setMaxLabel] = React.useState(initialState.maxLabel);
  const [stepVal, setStepVal] = React.useState(initialState.step);

  const [options, setOptions] = React.useState(initialState);
  React.useEffect(() => {
    optionsChanged(options);
  },[options]);
  
  const onChange = (event) => {
    let newOptions = _.cloneDeep(options);
    switch (event.target.id) {
      case "min-value":
        newOptions.min = parseInt(event.target.value);
        setMinval(newOptions.min);
        break;
      case "max-value":
        newOptions.max = parseInt(event.target.value);
        setMaxVal(newOptions.max);
        break;
      case "min-label":
        newOptions.minLabel = event.target.value;
        setMinLabel(newOptions.minLabel);
        break;
      case "max-label":
        newOptions.maxLabel = event.target.value;
        setMaxLabel(newOptions.maxLabel);
        break;
      case "default-value":
        newOptions.defaultValue = parseInt(event.target.value);
        setDefaultVal(newOptions.defaultValue);
        break;
      case "step-value":
        newOptions.step = parseInt(event.target.value);
        setStepVal(newOptions.step);
        break;
    }
    setOptions(newOptions);
    optionsChanged(newOptions);
  };

  return (
    <FormControl style={{ marginTop: "10px" }}>
      <Grid container direction="column" spacing={2}>
        <Grid item container direction="row" spacing={2}>
          <Grid item xs>
            <TextField
              id="min-label"
              label="Minimum value label"
              type="string"
              style={{ margin: 8 }}
              value={minLabel}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              variant="standard"
            />
          </Grid>{" "}
          <Grid item xs>
            <TextField
              id="max-label"
              label="Maximum value label"
              type="string"
              style={{ margin: 8 }}
              value={maxLabel}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              variant="standard"
            />
          </Grid>{" "}
        </Grid>
        <Grid item container direction="row" spacing={2}>
          <Grid item xs>
            <TextField
              id="min-value"
              label="Minimum value"
              type="number"
              style={{ margin: 8 }}
              placeholder="Minimum value"
              defaultValue={options.min}
              value={minVal}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              variant="standard"
            />
          </Grid>

          <Grid item xs>
            <TextField
              id="max-value"
              label="Maximum value"
              type="number"
              style={{ margin: 8 }}
              placeholder="Maximum value"
              defaultValue={options.max}
              fullWidth
              value={maxVal}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="default-value"
              label="Default value"
              type="number"
              style={{ margin: 8 }}
              placeholder="Default value"
              defaultValue={options.defaultValue}
              fullWidth
              value={defaultVal}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="step-value"
              label="Step value"
              type="number"
              style={{ margin: 8 }}
              placeholder="Step value"
              defaultValue={options.step}
              fullWidth
              value={stepVal}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              variant="standard"
            />
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default SliderAnswerOptions;
