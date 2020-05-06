import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

// ReactDOM.render(<SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle"/>,	document.getElementById('root'));

function Copyright() {
  return (
    <Typography
color="inherit" variant="subtitle2" align="center"
      style={{
        fontFamily: "\"Consolas\", \"Helvetica\", \"Arial\", sans-serif",
      }}>
      {"Copyright © "}
      OsmanP. {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#404752",
    top: 'auto',
    bottom: 0,
    height: '50px'
  },
  footer: {

  },
}));

const socialIconProps = {
  iconSize: 4,
  roundness: "50%",
  backgroundColor: "rgba(56,63,73,1)"
};

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <CssBaseline></CssBaseline>
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md" className={classes.footer}>
            <Copyright />
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
