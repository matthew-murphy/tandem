import React from "react";
import { Button } from "@material-ui/core";
import "./PageNotFound.css";

const PageNotFound = () => (
  <React.Fragment>
    <div id="PageNotFoundContainer">
      <div id="PageNotFoundMessage">
        <Button variant="contained" color="secondary" href="/Trivia">
          {" "}
          Home
          {" "}
        </Button>
      </div>
    </div>
  </React.Fragment>
);

export default PageNotFound;
