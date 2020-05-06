import { Box, Button, FormControl, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField, Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import DeleteIcon from "@material-ui/icons/Delete";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import _ from "lodash";
import React from "react";

const getIcon = (type) => {
  switch (type) {
    case "single-select-radio":
      return <RadioButtonUncheckedIcon />;
    case "single-select-checkbox":
      return <CheckBoxOutlineBlankIcon />;
    case "single-select-dropdown":
      return <ArrowDropDownIcon />;
    default:
      break;
  }
};

const SelectAnswerOptions = ({ type, initialOptions, optionsChanged }) => {

  const initialState = {
    rows: initialOptions.rows || [],    
    variant: type ? type.replace('single-select-','') : 'radio'
  };

  console.log(initialOptions);
  const [options, setOptions] = React.useState(initialState);
  const [rows, setRows] = React.useState(initialState.rows);
  const [label, setLabel] = React.useState("");
  const [answerText, setAnswerText] = React.useState("");
  const [answerValue, setAnswerValue] = React.useState(1);
  const [value, setValue] = React.useState(1);

  React.useEffect(() => {
    setRows(initialState.rows);
  }, [initialOptions, type]);
  
  React.useEffect(() => {
    optionsChanged(options);
  },[options]);
  
  const onChange = (event) => {
    switch (event.target.id) {
      case "answer":
        setLabel(event.target.value);
        setAnswerText(event.target.value);
        break;
      case "answer-value":
        setValue(event.target.value);
        setAnswerValue(event.target.value);
        break;
    }
  };
  const handleDeleteOption = (index) => {
    let newOptions = _.cloneDeep(options);
    newOptions.rows.splice(index, 1);
    setOptions(newOptions);
    optionsChanged(newOptions);
    setAnswerValue(newOptions.rows.length);
  };

  const handleAddOther = () => {
    if (label.length < 1) return;
    let newOptions = _.cloneDeep(options);
    newOptions.rows.push({
      label: "",
      value: value,
      type: 'other'
    });
    setOptions(newOptions);
    optionsChanged(newOptions);
    setAnswerText("");
  };

  const handleAddNewOption = () => {
    if (label.length < 1) return;
    let newOptions = _.cloneDeep(options);
    newOptions.rows.push({
      label: label,
      value: value,
    });
    setOptions(newOptions);
    optionsChanged(newOptions);
    setAnswerText("");
  };
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item xs={12}>
        <FormControl style={{ minWidth: '100%' }}>
          <Grid
            container
            direction="row"
            spacing={2}
            alignContent="flex-start"
            justify="space-between"
            alignItems="center"

          >
            <Grid item xs={6}>
              <TextField
                id="answer"
                label="answer"
                style={{ margin: 8 }}
                defaultValue={""}
                value={answerText}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="answer-value"
                label="answer value"
                type="number"
                style={{ margin: 8 }}
                defaultValue={1}
                value={answerValue}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                color="secondary"
                variant='outlined'
                size='small'
                onClick={handleAddNewOption}
              >
                Add
              </Button>
            </Grid>
            <Grid item xs>
              {type != 'single-select-dropdown' ? <Button
                color="secondary"
                variant='outlined'
                size='small'                
                onClick={handleAddOther}
              >
                <Typography variant='caption' >Add Other</Typography>
                
              </Button> : null}
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs></Grid>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h6"><u>{"Options"}</u></Typography>
          <List dense>
            {rows.map((element, index) => {
              return (
                <ListItem key={index}>
                  {" "}
                  <ListItemIcon>{getIcon(type)}</ListItemIcon>
                  <ListItemText primary={element.label} />
                  <ListItemSecondaryAction>
                    <IconButton
                      color="secondary"
                      component="span"
                      onClick={() => handleDeleteOption(index)}
                    >
                      <DeleteIcon></DeleteIcon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SelectAnswerOptions;
