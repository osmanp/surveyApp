import { FormControl, Grid, TextField } from "@material-ui/core";
import React from "react";
import _ from 'lodash';

const FreeTextAnswerOptions = ({optionsChanged,short}) => {
  const initialState = {    
      rows:10,
      maxCharacter:-1    
  }
  const [options,setOptions] = React.useState(initialState);
  
  const onChange = (event) =>{
    let newOptions = _.cloneDeep(options);
    switch (event.target.id) {
      case 'max-row':
        newOptions.rows = event.target.value;
        break;
        case 'max-char':
          newOptions.maxCharacter = event.target.value;
        break;    
    }
    setOptions(newOptions);
    optionsChanged(newOptions);
  }  
  return (
    <FormControl>
      <Grid container direction="row" spacing={2}>
        {/* Title  */}
        {!short ? <Grid item xs>
          {/* number */}
          <TextField
            id="max-row"
            label="Row Count"
            type='number'
            style={{ margin: 8 }}
            placeholder="Number of rows"  
            defaultValue={10}          
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="standard"
          />
        </Grid>   : null}     
        <Grid item xs>
          {/* number */}
          <TextField
            id="max-char"
            label="Max Character Count"
            type='number'
            style={{ margin: 8 }}
            placeholder="Maximum Character Limit"  
            defaultValue={250}          
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="standard"
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default FreeTextAnswerOptions;