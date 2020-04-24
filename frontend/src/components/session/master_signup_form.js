import React from "react";
import Step1 from "./step1_signup_form";
import Step2 from "./step2_signup_form";
import Step3 from "./step3_signup_form";
import "./signup.css";

class MasterSignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      password2: "",
      name: "",
      weight: "",
      heightFeet: "",
      heightInches: "",
      gender: "",
      age: "",
      diet: "",
      exclusions: [],
      targetWeight: 0,
      male: "",
      female: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.update = this.update.bind(this);
    this.updateCheckBox = this.updateCheckBox.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.previousButton = this.previousButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.checkedOrNah = this.checkedOrNah.bind(this);

   
  
  }

  update(field) {
    return (e) => {
      if (e.currentTarget.value === "F")
        this.setState({ female: "blue", male: "" });
      if (e.currentTarget.value === "M")
        this.setState({ male: "blue", female: "" });

      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  updateCheckBox(val) {
    let exclusionValues = this.state.exclusions;
    return () => {
      if (exclusionValues.includes(val)) {
        const targetIdx = exclusionValues.indexOf(val);
        exclusionValues.splice(targetIdx, 1);
      } else {
        exclusionValues.push(val);
      }
      this.setState(this.state)
    }

  }

  checkedOrNah(val) {
    return this.state.exclusions.includes(val) ? true : false;
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      name: this.state.name,
      weight: Number(this.state.weight),
      heightFeet: Number(this.state.heightFeet),
      heightInches: Number(this.state.heightInches),
      gender: this.state.gender,
      age: Number(this.state.age),
      diet: this.state.diet,
      exclusions: this.state.exclusions,
      targetWeight: Number(this.state.targetWeight),
      errors: {},
    };

    this.props.clearErrors();

    return this.props.signup(user, this.state.currentStep).then(() => {
      if (Object.values(this.props.errors).length === 0) {
        return this._next();
      }
    })
  }

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
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
          onClick={this._prev}
          type="button"
          >
          <p>Previous</p>
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  nextButton() {
    // this.state === empty, onClick, handleErrors.
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button 
          className="btn btn-primary float-right" 
          onClick={this.handleSubmit}
          type="button"
          >
          <p>Next</p>
        </button>
      );
    }
    // ...else rener nothing
    return null;
  }

  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <button
          className="btn btn-tertiary"
          type="button"
          onClick={this.handleSubmit}
        >
          <p>Sign Up</p>
        </button>
      );
    }
  }

  handleErrors() {
    if (Object.keys(this.props.errors).length === 0) {
      return <></>;
    } else {
      if (this.state.currentStep === 1) {
        return (
          <ul>
            {Object.keys(this.props.errors).map((error, i) => {
              if (
                error === "name" ||
                error === "gender" ||
                error === "age" ||
                error === "weight" ||
                error === "heightFeet" ||
                error === "heightInches"
              ) {
                return (
                  <li key={`error-${i}`} className="signup-errors-ul">
                    <p>{this.props.errors[error]}</p>
                  </li>
                );
              }
            })}
          </ul>
        );
      } else if (this.state.currentStep === 2) {
        return (
          <ul>
            {Object.keys(this.props.errors).map((error, i) => {
              if (
                error === "diet" ||
                error === "exclusions" ||
                error === "targetWeight"
              ) {
                return (
                  <li key={`error-${i}`} className="signup-errors-ul">
                    <p>{this.props.errors[error]}</p>
                  </li>
                );
              }
            })}
          </ul>
        );
      } else {
        return (
          <ul>
            {Object.keys(this.props.errors).map((error, i) => {
              return (
                <li key={`error-${i}`} className="signup-errors-ul">
                  <p>{this.props.errors[error]}</p>
                </li>
              );
            })}
          </ul>
        );
      }
    }
  }

  render() {
    return (
      <div className="master-signup-form-container-background">
        <div className="master-signup-form-container">
          <div className="master-signup-form">
            {/* <p>Step {this.state.currentStep} of 3 </p> */}
            <form onSubmit={this.handleSubmit}>
              {/* {this.handleErrors()} */}
              <Step1
                currentStep={this.state.currentStep}
                handleErrors={this.handleErrors}
                update={this.update}
                name={this.state.name}
                weight={this.state.weight}
                heightFeet={this.state.heightFeet}
                heightInches={this.state.heightInches}
                gender={this.state.gender}
                female={this.state.female}
                male={this.state.male}
                age={this.state.age}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleErrors={this.handleErrors}
                update={this.update}
                updateCheckBox={this.updateCheckBox}
                diet={this.state.diet}
                checkedOrNah={this.checkedOrNah}
                exclusions={this.state.exclusions}
                targetWeight={this.state.targetWeight}
                checkboxes={this.state}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleErrors={this.handleErrors}
                update={this.update}
                email={this.state.email}
                password={this.state.password}
                password2={this.state.password2}
              />
              <div className="btns">
                {this.previousButton()}
                {this.nextButton()}
                {this.submitButton()}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MasterSignUpForm;
