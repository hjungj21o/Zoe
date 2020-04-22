import React from "react";
import Step1 from "./step1_signup_form";
import Step2 from "./step2_signup_form";
import "./signup.css";
import { Link } from "react-router-dom";

class MasterSignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      password2: "",
      name: "",
      weight: 0,
      heightFeet: 0,
      heightInches: 0,
      gender: "",
      age: 0,
      diet: "Regular",
      exclusions: "",
      targetWeight: 0,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.previousButton = this.previousButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      name: this.state.name,
      weight: this.state.weight,
      heightFeet: this.state.heightFeet,
      heightInches: this.state.heightInches,
      gender: this.state.gender,
      age: this.state.age,
      diet: this.state.diet,
      exclusions: this.state.exclusions,
      targetWeight: this.state.targetWeight,
      errors: {},
    };

    this.props
      .signup(user, this.props.history)
      .then(() => this.props.login(user));
  }

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep === 2 ? 2 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2, then subtract one on "previous" button click
    currentStep = currentStep === 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 2) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary float-right"
          type="button"
          onClick={this.handleSubmit}
        >
          Sign Up
        </button>
      );
    }
  }

  handleErrors() {
    //Handle errors message here
  }

  render() {
    return (
      <div className="master-signup-form-container-background">
        <div className="master-signup-form-container">
          <div className="master-signup-form">
            <p>Step {this.state.currentStep} of 2 </p>

            <form onSubmit={this.handleSubmit}>
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                update={this.update}
                email={this.state.email}
                password={this.state.password}
                password2={this.state.password2}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                update={this.update}
                name={this.state.name}
                weight={this.state.weight}
                heightFeet={this.state.heightFeet}
                heightInches={this.state.heightInches}
                gender={this.state.gender}
                age={this.state.age}
                diet={this.state.diet}
                exclusions={this.state.exlusions}
                targetWeight={this.state.targetWeight}
              />
              {this.previousButton()}
              {this.nextButton()}
              {this.submitButton()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MasterSignUpForm;
