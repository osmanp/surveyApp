import { FormControl, Grid, TextField, Switch,FormControlLabel } from "@material-ui/core";
import React from "react";
import _ from 'lodash';



const QuestionBodyForm = ({ optionsChanged }) => {
  const initialState = {
    
      variant: 'default',
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1,
      minLabel: "Not happy",
      maxLabel: "Very happy",
  };
  const [options, setOptions] = React.useState(initialState);

  const onChange = (event) => {
    let newOptions = _.cloneDeep(options);
    switch (event.target.id) {
      case "min-value":
        newOptions.min = parseInt(event.target.value);
        break;
      case "max-value":
        newOptions.max = parseInt(event.target.value);
        break;
      case "min-label":
        newOptions.minLabel = event.target.value;
        break;
      case "max-label":
        newOptions.maxLabel = event.target.value;
        break;
      case "default-value":
        newOptions.defaultValue = parseInt(event.target.value);
        break;
      case "step-value":
        newOptions.step = parseInt(event.target.value);
        break;
      case "type":
        newOptions.variant = event.target.checked ? 'discrete' : 'default';
        break;
    }
    setOptions(newOptions);
    optionsChanged(newOptions);
  };

  return (
    <FormControl style={{marginTop: "10px" }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                onChange={onChange}
                name="type"
                id="type"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Discrete Grid"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="min-label"
            label="Minimum value label"
            type="string"
            style={{ margin: 8 }}
            placeholder="Minimum value label"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="min-value"
            label="Minimum value"
            type="number"
            style={{ margin: 8 }}
            placeholder="Minimum value"
            defaultValue={options.min}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="max-label"
            label="Maximum value label"
            type="string"
            style={{ margin: 8 }}
            placeholder="Maximum value label"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="outlined"
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
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="outlined"
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
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="outlined"
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
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default QuestionBodyForm;
