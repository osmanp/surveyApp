import { FormControl, Grid, TextField } from "@material-ui/core";
import React from "react";
import _ from 'lodash';

const FreeTextAnswerOptions = ({optionsChanged}) => {
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
    <FormControl style={{ marginTop: "40px" }}>
      <Grid container direction="column" spacing={2}>
        {/* Title  */}
        <Grid item xs>
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
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          {/* number */}
          <TextField
            id="max-char"
            label="Max Character Count"
            type='number'
            style={{ margin: 8 }}
            placeholder="Maximum Character Limit"  
            defaultValue={500}          
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

export default FreeTextAnswerOptions;
