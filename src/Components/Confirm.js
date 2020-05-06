import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process the form //
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, city, occupation, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data"></AppBar>
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            ></ListItem>
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            ></ListItem>
            <ListItem primaryText="Email" secondaryText={email}></ListItem>
            <ListItem
              primaryText="occupation"
              secondaryText={occupation}
            ></ListItem>
            <ListItem primaryText="city" secondaryText={city}></ListItem>{" "}
            <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
          </List>
          <br />
          <RaisedButton
            label="Confirm && Continue"
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

export default Confirm;
