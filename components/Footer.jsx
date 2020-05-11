import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

// ReactDOM.render(<SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle"/>,	document.getElementById('root'));

function Copyright() {
  return (
    <Typography
      color="inherit" variant="subtitle2" align="center"
      style={{
        fontFamily: "\"Arial\", \"Helvetica\", \"Arial\", sans-serif",
      }}>
      {"Copyright © "}
      OsmanP. {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#C2EBDD",
    top: 'auto',
    bottom: 0,
    height: '30px'
  },
  footer: {
    marginBottom:'30px'
  },
}));


export default function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color='inherit'>
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
