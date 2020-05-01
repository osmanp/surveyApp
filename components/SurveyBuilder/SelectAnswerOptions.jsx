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

import React from "react";
import _ from "lodash";

const SelectAnswerOptions = ({ optionsChanged }) => {
  const initialState = {
    options: [],
  };
  const [options, setOptions] = React.useState(initialState);
  const [label, setLabel] = React.useState("");
  const [value, setValue] = React.useState(1);
  const onChange = (event) => {
    switch (event.target.id) {
      case "answer":
        setLabel(event.target.value);
        break;
      case "answer-value":
        setValue(event.target.value);
        break;
    }
  };
  const onHandleClickOption = (index) => {    
    let newOptions = _.cloneDeep(options);
    newOptions.options.splice(index,1);
    setOptions(newOptions);
    optionsChanged(newOptions);
  };
  const onAddNewOption = (event) => {
    if (label.length < 1) return;
    let newOptions = _.cloneDeep(options);
    newOptions.options.push({
      label: label,
      value: value,
    });
    setOptions(newOptions);
    optionsChanged(newOptions);
  };
  return (
    <Box style={{ marginTop: "40px" }}>
    <Grid container direction="column" spacing={1}>
      <Grid item xs={12}>
        <FormControl style={{ width: "100%" }}>
          <Grid
            container
            direction="row"
            spacing={2}
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <TextField
                id="answer"
                label="answer"
                style={{ margin: 8 }}
                defaultValue={""}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="answer-value"
                label="answer-value"
                type="number"
                style={{ margin: 8 }}
                defaultValue={1}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={onAddNewOption}
              >
                Add Option
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs></Grid>
      <Grid item xs>
        <Box>
          <Typography variant="h6">{"Answer options"}</Typography>

          <List>
            {options.options.map((element, index) => {
              return (
                <ListItem key={index}>
                  {" "}
                  <ListItemText primary={element.label} />
                  <ListItemSecondaryAction>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
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
    </Box>
  );
};

export default SelectAnswerOptions;
