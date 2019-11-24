import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <h1>Pixal-Bay Image Finder</h1>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default NavBar;
