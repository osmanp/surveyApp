import { FormControl, Grid, TextField } from "@material-ui/core";
import React from "react";
import _ from 'lodash';

const DateTimeAnswerOptions = ({type, initialOptions, optionsChanged}) => {
  const initialState = {          
      label: initialOptions.label ||  (type ==  'date' ? 'Select Date' : 'Select Time'),
      defaultValue:initialOptions.defaultValue || null,
      variant:type
  };

  const [options,setOptions] = React.useState(initialState);
  const [label,setLabel]  = React.useState(initialState.label);
  const [defaultValue,setDefaultValue]  = React.useState(initialState.label);

  React.useEffect(() => {
    setLabel(initialState.label);
    setDefaultValue(initialState.defaultValue);
  },[initialOptions]);
  
  React.useEffect(() => {
    optionsChanged(options);
  },[options]);
  
  const handleChange = (event) => {
    let newOptions = _.cloneDeep(options);
    switch (event.target.id) {
      case "label":
        newOptions.label = event.target.value;
        setLabel(newOptions.label);
        break;
      case "default-value":
        newOptions.defaultValue = event.target.value;
        setDefaultValue(newOptions.defaultValue);
        break;
      default:
        break;
    }
    setOptions(newOptions);
    optionsChanged(newOptions);
  };
 
  return (
    <FormControl>
      <Grid container direction="row" justify='center' alignItems='center' alignContent='center' spacing={2}>
        {/* Label  */}
        <Grid item xs>
          {/* number */}
          <TextField
            id="label"
            label="Label"
            type='text'
            placeholder={options.label}                  
            fullWidth
            value={label}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}            
            variant="standard"
            onChange={handleChange}
          />
        </Grid>      
        <Grid item xs>
          {/* number */}
          <TextField
            id="view"
            label={"Default " + (type == 'date' ? ' Date' : ' Time')}
            type={type}                        
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            value={defaultValue}
            variant="standard"
          />
        </Grid>        
      </Grid>
    </FormControl>
  );
};

export default DateTimeAnswerOptions;
