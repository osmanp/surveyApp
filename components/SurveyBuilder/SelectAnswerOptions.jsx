import {
  FormControl,
  Button,
  Grid,
  TextField,
  Box,
  Paper,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  Divider,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React from "react";
import _ from "lodash";

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

const SelectAnswerOptions = ({ type, optionsChanged }) => {
  const initialState = {
    options: [],
  };
  const [options, setOptions] = React.useState(initialState);
  const [label, setLabel] = React.useState("");
  const [answerText, setAnswerText] = React.useState("");
  const [answerValue, setAnswerValue] = React.useState(1);
  const [value, setValue] = React.useState(1);
  const onChange = (event) => {
    switch (event.target.id) {
      case "answer":
        setLabel(event.target.value);
        setAnswerText(event.target.value)
        break;
      case "answer-value":
        setValue(event.target.value);
        setAnswerValue(event.target.value)
        break;
    }
  };
  const onHandleClickOption = (index) => {
    let newOptions = _.cloneDeep(options);
    newOptions.options.splice(index, 1);
    setOptions(newOptions);
    optionsChanged(newOptions);
    setAnswerValue(newOptions.options.length);
  };
  const handleAddOther = (event) => {
    if (label.length < 1) return;
    let newOptions = _.cloneDeep(options);
    newOptions.options.push({
      label: "",
      value: value,
      type:'other'
    });
    setOptions(newOptions);
    optionsChanged(newOptions);
    setAnswerText("");    
  }
  const handleAddNewOption = (event) => {
    if (label.length < 1) return;
    let newOptions = _.cloneDeep(options);
    newOptions.options.push({
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
        <FormControl style={{minWidth:'100%'}}>
          <Grid
            container
            direction="row"
            spacing={2}
            alignContent="flex-start"
            justify="center"
            alignItems="center"
            
          >
            <Grid item xs={7}>
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
            <Grid item xs={1}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddNewOption}
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={2}>
              {type != 'single-select-dropdown' ? <Button
                variant="contained"
                color="secondary"
                onClick={handleAddOther}
              >
                Add Other
              </Button> : null }
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs></Grid>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h6"><u>{"Options"}</u></Typography>
          <List dense>            
            {options.options.map((element, index) => {
              return (
                <ListItem key={index}>
                  {" "}
                  <ListItemIcon>{getIcon(type)}</ListItemIcon>
                  <ListItemText primary={element.label} />
                  <ListItemSecondaryAction>
                    <IconButton
                      color="secondary"
                      component="span"
                      onClick={() => onHandleClickOption(index)}
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
