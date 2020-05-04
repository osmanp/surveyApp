import {
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField,
  makeStyles,
  InputAdornment,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import React from "react";

const useStyles = makeStyles((theme) => ({
  titleInput: {
    fontSize: 40,
    textTransform: "capitalize",
  },
}));

const SurveyTitleForm = ({ handlers }) => {
  const classes = useStyles();
  const initialState = {
    text: "A survey example",
    estimatedTime: "30min",
    questionCount: 9,
    showQuestionCount: true,
    showProgressBar: true,
    showEstimatedTime: true,
  };
  const [surveyTitle, setSurveyTitle] = React.useState(initialState);
  const [estimatedTime, setEstimatedTime] = React.useState(initialState.showEstimatedTime);
  const handleChange = (event) => {
    let newSurveyTitle = _.cloneDeep(surveyTitle);
    switch (event.target.id) {
      case "show-question-count":
        newSurveyTitle.showQuestionCount = event.target.checked;
        break;
      case "show-question-pbar":
        newSurveyTitle.showProgressBar = event.target.checked;
        break;
      case "show-estimated-time":
        newSurveyTitle.showEstimatedTime = event.target.checked;
        setEstimatedTime(!estimatedTime);
        break;
    }
    setSurveyTitle(newSurveyTitle);
    handlers.updateTitle(newSurveyTitle);
  };
  return (
    <Container maxWidth="md">
      <Paper
        elevation={4}
        variant="elevation"
        style={{
          margin: "4px",
          marginTop: "20px",
          maxWidth:'100%',
          borderRadius:'20px'
        }}
      >
        <FormControl
          style={{
            minWidth: "95%",
            minHeight: "250px",
            marginTop: "20px",
            marginLeft: "20px",
            textAlign: "center",
          }}
        >
          <Grid
            container
            direction="column"
            spacing={2}
            alignItems="stretch"
            alignContent="center"
            justify="center"
          >
            <Grid item xs={12}>
              <TextField
                id="survey-title"
                label="Survey title"
                type="text"
                fullWidth
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  classes: {
                    input: classes.titleInput,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="survey-description"
                label="Survey description"
                type="text"
                fullWidth
                rows={1}
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item container xs={12} direction="row">
              {/*Show Question Count */}
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Switch
                      id="show-question-count"
                      checked={surveyTitle.showQuestionCount}
                      onChange={handleChange}
                      name="show-question-count"
                      color="secondary"
                    />
                  }
                  labelPlacement="start"
                  label="Show question count"
                />
              </Grid>
              {/*  Show progress bar*/}
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Switch
                    id="show-question-pbar"
                      checked={surveyTitle.showProgressBar}
                      onChange={handleChange}
                      name="show-question-pbar"
                      color="secondary"
                    />
                  }
                  labelPlacement="start"
                  label="Show progress"
                />
              </Grid>
              {/*  Show estimated time*/}
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Switch
                      id="show-estimated-time"
                      checked={surveyTitle.showEstimatedTime}
                      onChange={handleChange}
                      name="show-estimated-time"
                      color="secondary"
                    />
                  }
                  labelPlacement="start"
                  label="Show estimated time"
                />
              </Grid>
              {/* Estimated Time */}
              <Grid item xs>
                {estimatedTime ? (
                  <TextField
                    id="estimated-time"
                    label="Estimated Time"
                    type="number"
                    variant="outlined"
                    style={{ maxWidth: "80%" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccessTimeIcon fontSize="small"></AccessTimeIcon>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">Minute</InputAdornment>
                      ),
                    }}
                  />
                ) : (
                  <TextField
                    id="estimated-time"
                    label="Estimated Time"
                    type="number"
                    variant="outlined"
                    style={{ maxWidth: "80%" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccessTimeIcon fontSize="small"></AccessTimeIcon>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">Minute</InputAdornment>
                      ),
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default SurveyTitleForm;
