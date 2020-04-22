import React from 'react';

class MasterForm extends React.Component {
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
            diet: "",
            exclusions: "",
            targetWeight: 0,
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
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
            errors: {}
        };

        this.props
        .signup(user, this.props.history)
            .then(() => this.props.login(user));
    }

    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep === 2 ? 2 : currentStep + 1
        this.setState({
        currentStep: currentStep
        })
    }
    
    _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2, then subtract one on "previous" button click
        currentStep = currentStep === 1 ? 1: currentStep - 1
        this.setState({
        currentStep: currentStep
        })
    }

  render() {
      return (
        <p>Step {this.state.currentStep} of 2 </p> 
            
        <form onSubmit={this.handleSubmit}>
            <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
            />
            <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
            />
        </form>
    )
  }
}