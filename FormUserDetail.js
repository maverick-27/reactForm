import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details "></AppBar>
          <TextField
            hintText="Enter your First Name "
            floatingLabelText="First Name"
            handleChange={handleChange("firstName")}
            defaultValue={values.firstName}
          ></TextField>
          <br />
          <TextField
            hintText="Enter your Last Name "
            floatingLabelText="Last Name"
            handleChange={handleChange("lastName")}
            defaultValue={values.firstName}
          ></TextField>
          <br />
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            handleChange={handleChange("email")}
            defaultValue={values.email}
          ></TextField>
          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetail;
