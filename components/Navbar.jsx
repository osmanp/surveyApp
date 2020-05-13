import { AppBar, Avatar, Button, Container, CssBaseline, Grid, Toolbar, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useRouter } from "next/router";
import React from "react";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#F5F5F5",
    overflowY: "hidden",
  },
  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  toolbarTitle: {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '16px',
    color:'black',
    fontWeight: 400,
    "&:hover": {
      backgroundColor:'#99CC99'
    },
  },
  avatarLarge: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: "#99CC99",
    borderRadius: "50%",
    color:'black',
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
      style={{ fontSize: '0.8wh',color:'black' ,border:'0.1rem solid #99CC99',
      padding:'10px',paddingRight:'20px',paddingLeft:'20px',borderRadius: '40px'}}      
    >

      <Link
        variant="inherit"
        color="inherit"
        href={"/" + href}
        underline="none"
      >
        <b>{text}</b>
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
      <AppBar position="fixed" className={classes.appBar} >
        <CssBaseline />
        <Toolbar className={classes.toolbar}>

          <Grid container alignContent="center" justify='flex-start' alignItems="center" spacing={1}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Grid container alignContent="center" >
                <Grid item xs={2}>
                  <Avatar                    
                    className={classes.avatarLarge}
                    onClick={handleAvatarClick}
                  >S W</Avatar>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    component="h5"
                    variant="h5"
                    noWrap
                    align="left"
                    style={{ fontSize: '2wh',color:'black',padding:'8px',fontFamily:'Garamond'}}
                  ><b>Survey World</b> </Typography>
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
                    href={"list_surveys"}
                  ></NavBarItem>
                </Grid>
                <Grid item>
                  <NavBarItem
                    text={"Public Surveys"}
                    href={"list_surveys"}
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
