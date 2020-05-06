import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"></AppBar>
          <h1>Thank you for the submission</h1>
          <p>You will get Email after confirmation</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
