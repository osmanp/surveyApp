import { Container, Grid } from "@material-ui/core";
import React from "react";
import SurveyBody from "./SurveyBody";
import SurveyTitle from "./SurveyTitle";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

// const innerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: green[500],
//     },
//   },
//   typography:{
//     fontSize:30
//   }
// });

const SurveyContainer = ({ survey }) => {
  const [progress, setProgress] = React.useState(0);
  const handleProgress = (progress) => {
    setProgress(progress);
  };
  return (
    //<ThemeProvider theme={innerTheme}>
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        alignContent="stretch"
        justify="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs>
          <SurveyTitle survey={survey} progress={progress}></SurveyTitle>
        </Grid>
        <Grid item xs>
          <SurveyBody
            survey={survey}
            progressChanged={handleProgress}
          ></SurveyBody>
        </Grid>
      </Grid>
    </Container>
    //</ThemeProvider>
  );
};

export default SurveyContainer;
