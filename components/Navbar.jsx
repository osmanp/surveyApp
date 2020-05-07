import { AppBar, Avatar, Button, Container, CssBaseline, Grid, Toolbar, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useRouter } from "next/router";
import React from "react";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#56A128",
    overflowY: "hidden",
  },
  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  toolbarTitle: {
    fontFamily: 'Arial',
    fontSize: '18px',
    fontWeight: 400,
    "&:hover": {
      backgroundColor:'#09950A'
    },
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: "#41594F",
    borderRadius: "50%",
    border: 0,
    "&:hover": {
      cursor: "pointer",
    },
    circularPortrait: {
      borderRadius: "50%",
    },
  },
}));

const NavBarItem = ({ text, href }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (    
    <Typography
      color="inherit"
      align="center"
      noWrap
      className={classes.toolbarTitle}
      style={{ fontSize: '1.3rem',color:'white' ,border:'0.1rem solid #09950A',padding:'10px',paddingRight:'20px',paddingLeft:'20px',borderRadius: '40px'}}      
    >

      <Link
        variant="inherit"
        color="inherit"
        href={"/" + href}
        underline="none"
      >
        {text}
      </Link>
    </Typography>
  );
};

const Navbar = () => {
  const classes = useStyles();
  const router = useRouter();
  const handleAvatarClick = () => {
    router.push("/index");
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <CssBaseline />
        <Toolbar className={classes.toolbar}>

          <Grid container alignContent="center" justify='flex-start' alignItems="center" spacing={1}>
            <Grid item xs={2}>
              <Grid container alignContent="center" >
                <Grid item xs={2}>
                  <Avatar
                    alt="Osman P"
                    className={classes.avatarLarge}
                    onClick={handleAvatarClick}
                  >F S</Avatar>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    component="h2"
                    variant="h5"
                    noWrap
                    align="left"
                    style={{ paddingLeft: "10px", paddingTop: '10px', fontFamily: 'Garamond' }}
                  > {'Fast Survey'}</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid container alignContent="stretch" justify="space-between" >
                <Grid item>
                  <NavBarItem text={"Survey Builder"} href={"create_survey"}></NavBarItem>
                </Grid>
                <Grid item>
                  <NavBarItem
                    text={"Search Survey Templates"}
                    href={"search_templates"}
                  ></NavBarItem>
                </Grid>
                <Grid item>
                  <NavBarItem
                    text={"My Surveys"}
                    href={"view_surveys"}
                  ></NavBarItem>
                </Grid>
                <Grid item>
                  <NavBarItem
                    text={"Public Surveys"}
                    href={"public_surveys"}
                  ></NavBarItem>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
