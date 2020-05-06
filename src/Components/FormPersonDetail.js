import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details "></AppBar>
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Occupation"
            handleChange={handleChange("occupation")}
            defaultValue={values.occupation}
          ></TextField>
          <br />
          <TextField
            hintText="Enter your City Name "
            floatingLabelText="City Name"
            handleChange={handleChange("city")}
            defaultValue={values.city}
          ></TextField>
          <br />
          <TextField
            hintText="Enter your Bio"
            floatingLabelText="Bio"
            handleChange={handleChange("bio")}
            defaultValue={values.bio}
          ></TextField>
          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default FormPersonDetail;
