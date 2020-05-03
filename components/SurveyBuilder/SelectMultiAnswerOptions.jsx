import { Box, Button, FormControl, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Paper, TextField } from "@material-ui/core";
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

const SelectMultiAnswerOptions = ({ type, optionsChanged }) => {
  const initialState = {
    rows: [],
    columns: [],
  };
  const [options, setOptions] = React.useState(initialState);
  const [rowLabel, setRowLabel] = React.useState("");
  const [columnLabel, setColumnLabel] = React.useState("");
  const handleDeleteRow = (index) => {
    let newOptions = _.cloneDeep(options);
    newOptions.rows.splice(index, 1);
    setOptions(newOptions);
  };
  const handleDeleteColumn = (index) => {
    let newOptions = _.cloneDeep(options);
    newOptions.columns.splice(index, 1);
    setOptions(newOptions);
  };
  const handleAddNewColumn = (index) => {
    let newOptions = _.cloneDeep(options);
    newOptions.columns.push({
      label: columnLabel,
      id: newOptions.columns.length + 1,
    });
    setOptions(newOptions);
    optionsChanged(newOptions);
  };
  const handleAddNewRow = (index) => {
    let newOptions = _.cloneDeep(options);
    newOptions.rows.push({
      label: rowLabel,
      id: newOptions.rows.length + 1,
    });
    setOptions(newOptions);
    optionsChanged(newOptions);
  };
  return (
    <Grid
      container
      direction="column"
      alignContent="stretch"
      alignItems="stretch"
      justify="center"
      spacing={4}
    >
      <Paper elevation={1} variant="outlined">
        <Grid item xs={12}>
          {/* Rows */}
          <FormControl style={{ width: "100%", margin: "10px" }}>
            <Grid
              container
              direction="row"
              spacing={2}
              alignContent="center"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={10}>
                <TextField
                  id="row"
                  label="Question Row"
                  defaultValue={""}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  onChange={(event) => setRowLabel(event.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddNewRow}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <List>
              {options.rows.map((element, index) => {
                return (
                  <ListItem key={index}>
                    {index + 1}
                    <ListItemIcon>{getIcon(type)}</ListItemIcon>
                    <ListItemText
                      primary={element.label}
                      primaryTypographyProps={{
                        variant: "h6",
                      }}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        color="secondary"
                        component="span"
                        onClick={() => handleDeleteRow(index)}
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
      </Paper>
      <Grid item xs></Grid>
      <Paper elevation={1} variant="outlined">
        <Grid item xs={12}>
          {/* Columns */}
          <FormControl style={{ width: "100%", margin: "10px" }}>
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
                  id="column"
                  label="Question Column"
                  defaultValue={""}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  onChange={(event) => setColumnLabel(event.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="column-value"
                  label="Column value"
                  type="number"                  
                  defaultValue={1}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddNewColumn}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <List dense>
              {options.columns.map((element, index) => {
                return (
                  <ListItem key={index}>
                    {index + 1}
                    <ListItemIcon>{getIcon(type)}</ListItemIcon>
                    <ListItemText primary={element.label} />
                    <ListItemSecondaryAction>
                      <IconButton
                        color="secondary"
                        component="span"
                        onClick={() => handleDeleteColumn(index)}
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
      </Paper>
    </Grid>
  );
};

export default SelectMultiAnswerOptions;
