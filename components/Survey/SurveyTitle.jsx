import PropTypes from "prop-types";
import React from "react";
import { Grid, Paper, Typography, makeStyles, Container } from "@material-ui/core";
import { lighten, withStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c",
  },
})(LinearProgress);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const SurveyTitle = ({ survey,progress }) => {
  const classes = useStyles();
  console.log(progress);
  return (
    <Container maxWidth='md'>
    <Paper elevation={1} variant='outlined' style={{padding:'10px',
    margin:'4px',
    marginTop: "20px",
    borderRadius:'20px',
    border:'0.04rem solid'}}>
    <Grid container direction="column" spacing={2}>
        <Grid item xs={12} style={{ minHeight: "100px" }}>
          <Typography variant="h3" align="center">
            {survey.title.text}
          </Typography>
        </Grid>
        <Grid item container xs={12} direction="row">
          <Grid item xs={6}>
            <Typography variant="h6" align="left">
              {"Total Questions :" + survey.title.questionCount}
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={6}
            justify="flex-end"
            alignContent="flex-end"
            alignItems="center"
          >
            <Grid item xs={8}></Grid>
            <Grid item xs={1}>
              <AccessTimeIcon fontSize="small"></AccessTimeIcon>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" align="left">
                {survey.title.estimatedTime}
              </Typography>
            </Grid>
           
          </Grid>
          {/* Total Questions, est time */}
        </Grid>
        <Grid item container xs={12} direction="row" alignItems="center">
          <Grid item xs={11}>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="primary"
              value={progress}
            />
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6" align="left">
              {"%" + progress.toFixed(1)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
      
    </Container>
  );
};

export default SurveyTitle;
