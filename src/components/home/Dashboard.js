import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Home from "./Home";
import app from "../../base";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// mui jss styling

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Roboto",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    justifyContent: "center",
    alignItems: "center",
    width: "80vw",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#f4f4f7",
  },
  fixedHeight: {
    height: "100%",
  },
}));

function MenuItems() {
  return (
    <div>
      <ListItem button onClick={() => app.auth().signOut()}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </div>
  );
}

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            t a n d e m
          </Typography>
          <div> {MenuItems()} </div>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            {/* Track */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                {/*  */}
                <Home />
                {/*  */}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
