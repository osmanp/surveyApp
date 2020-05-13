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
import _ from 'lodash';
import React from "react";

const useStyles = makeStyles((theme) => ({
  titleInput: {
    fontSize: 30,
    textTransform: "capitalize",
  },
}));

const SurveyTitleForm = ({ handlers }) => {
  const classes = useStyles();
  const initialState = {
    title: "A survey example",
    description:"",    
  };
  const [surveyTitle, setSurveyTitle] = React.useState(initialState);
  
  const handleChange = (event) => {
    let newSurveyTitle = _.cloneDeep(surveyTitle);
    switch (event.target.id) {
      case "survey-title":
        newSurveyTitle.title = event.target.value;
        break;
      case "survey-description":
        newSurveyTitle.description = event.target.value;
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
          marginLeft:'240px',
          maxWidth:'50%',
          maxHeight:'25vh',
          
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
                value={surveyTitle.title}
                onChange={handleChange}
                fullWidth
                style={{maxWidth:'90%'}}
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
                value={surveyTitle.description}
                onChange={handleChange}
                fullWidth
                rows={1}
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{maxWidth:'90%'}}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default SurveyTitleForm;
