import React, { Component } from "react";
import FormUserDetail from "./FormUserDetail";
import FormPersonDetail from "./FormPersonDetail";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    bio: "",
    city: "",
    occupation: "",
    email: "",
  };

  nextSteps = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevSteps = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, firstName, lastName, bio, occupation, city } = this.state;
    const values = { step, firstName, lastName, bio, occupation, city };

    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextSteps}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonDetail
            nextStep={this.nextSteps}
            prevStep={this.prevSteps}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextSteps}
            prevStep={this.prevSteps}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
    }
  }
}

export default UserForm;
