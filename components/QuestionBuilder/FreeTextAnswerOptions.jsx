import { FormControl, Grid, TextField } from "@material-ui/core";
import _ from 'lodash';
import React from "react";


const FreeTextAnswerOptions = ({ type, initialOptions, optionsChanged }) => {
  const initialState = {
    rowCount:initialOptions.rowCount || (type == 'short' ? 2 : 10),
    maxCharacter: initialOptions.maxCharacter || 0,
    variant: type 
  };
  

  const [options, setOptions] = React.useState(initialState);
  const [maxRow,setMaxRow] = React.useState(initialState.rowCount);
  const [maxChar,setMaxChar] = React.useState(initialState.maxCharacter);
  
  React.useEffect(() => {
    setMaxRow(initialState.rowCount);
    setMaxChar(initialState.maxCharacter);
  },[initialOptions]);
  
  React.useEffect(() => {
    optionsChanged(options);
  },[options]);
  
  
  const onChange = (event) => {
    let newOptions = _.cloneDeep(options);
    switch (event.target.id) {
      case 'max-row':
        newOptions.rowCount = event.target.value;
        setMaxRow(event.target.value);
        break;
      case 'max-char':
        newOptions.maxCharacter = event.target.value;
        setMaxChar(event.target.value);
        break;
    }
    setOptions(newOptions);
    optionsChanged(newOptions);    
  };
  return (
    <FormControl>
      <Grid container direction="row" spacing={2}>
        {/* Title  */}
        {type != 'short' ? <Grid item xs>
          {/* number */}
          <TextField
            id="max-row"
            label="Row Count"
            type='number'
            style={{ margin: 8 }}
            placeholder="Number of rows"            
            fullWidth
            margin="normal"
            value={maxRow}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
            variant="standard"
          />
        </Grid> : null}
        <Grid item xs>
          {/* number */}
          <TextField
            id="max-char"
            label="Max Character Count"
            type='number'
            style={{ margin: 8 }}
            placeholder="Maximum Character Limit"            
            fullWidth            
            value={maxChar}
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
