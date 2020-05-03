import { FormControl, Grid, TextField } from "@material-ui/core";
import React from "react";
import _ from 'lodash';

const DateTimeAnswerOptions = ({type, optionsChanged}) => {
  const initialState = {          
      label: type ==  'date' ? 'Select Date' : 'Select Time',
      defaultValue:null
  }

  const [options,setOptions] = React.useState(initialState);

  const handleChange = (event) => {
    let newOptions = _.cloneDeep(options);
    switch (event.target.id) {
      case "label":
        newOptions.label = event.target.value;
        break;
      case "default-value":
        newOptions.defaultValue = event.target.value;
        break;
      default:
        break;
    }
    setOptions(newOptions);
    optionsChanged(newOptions);
  }
 
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
            variant="standard"
          />
        </Grid>        
      </Grid>
    </FormControl>
  );
};

export default DateTimeAnswerOptions;
