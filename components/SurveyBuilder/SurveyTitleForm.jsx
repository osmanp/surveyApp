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
          borderRadius: '20px',
          marginLeft:'100px',
          maxWidth:'78%',
          alignContent:'center'
        }}
      >
        <FormControl
          style={{
            minWidth: "95%",
            minHeight: "200px",
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
            <Grid item>
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
            <Grid item xs>
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
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default SurveyTitleForm;
