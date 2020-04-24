import React from "react";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    // debugger;
    return (
      <div className="signup-form-container">
        <div className="signup-form-title">
          <h2>First, tell us a little bit about yourself.</h2>
        </div>
        <div className="signup-form-input">
          {this.props.handleErrors()}
          <label className="signup-name">
            <div className="signup-name-title">
              <p>Name</p>
            </div>
            <input
              type="text"
              value={this.props.name}
              onChange={this.props.update("name")}
              placeholder="First Name Last Name"
            />
          </label>
          <label className="signup-gender">
            <div className="signup-gender-title">
              <p>Gender</p>
            </div>
            <div className="signup-gender-btn">
              <button
                className={this.props.female}
                type="button"
                onClick={this.props.update("gender")}
                value="F"
              >
                <p>Female</p>
              </button>
              <button
                className={this.props.male}
                type="button"
                onClick={this.props.update("gender")}
                value="M"
              >
                <p>Male</p>
              </button>
            </div>
          </label>
          <label className="signup-age">
            <div className="signup-age-title">
              <p>Age</p>
            </div>
            <input
              type="number"
              min="1"
              max="99"
              value={this.props.age}
              onChange={this.props.update("age")}
              placeholder="Years"
            />
          </label>
          <label className="signup-weight">
            <div className="signup-weight-title">
              <p>Weight</p>
            </div>
            <input
              type="number"
              min="1"
              max="999"
              value={this.props.weight}
              onChange={this.props.update("weight")}
              placeholder="Pounds"
            />
          </label>
          <label className="signup-height">
            <div className="signup-height-title">
              <p>Height</p>
            </div>
            <div className="signup-height-input">
              <input
                type="number"
                min="1"
                max="9"
                value={this.props.heightFeet}
                onChange={this.props.update("heightFeet")}
                placeholder="Feet"
              />
              <input
                type="number"
                min="0"
                max="11"
                value={this.props.heightInches}
                onChange={this.props.update("heightInches")}
                placeholder="Inches"
              />
            </div>
          </label>
        </div>
      </div>
    );
  }
}

export default Step1;
