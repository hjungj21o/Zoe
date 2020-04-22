import React from "react";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    return (
      <div className="signup-form-container">
        {/* {this.renderErrors()} */}
        <div className="signup-form-input">
          <label className="signup-name">
            <div className="signup-name-title">NAME</div>
            <input
              type="text"
              value={this.props.name}
              onChange={this.props.update("name")}
              placeholder="First Last"
            />
          </label>
          <label className="signup-gender">
            <div className="signup-gender-title">GENDER</div>
            <select
              value={this.props.gender}
              onChange={this.props.update("gender")}
            >
              <option defaultValue disabled>
                Gender
              </option>
              <option>M</option>
              <option>F</option>
            </select>
          </label>
          <label className="signup-age">
            <div className="signup-age-title">AGE</div>
            <input
              type="text"
              pattern="\d+"
              value={this.props.age}
              onChange={this.props.update("age")}
              placeholder=""
            />
          </label>
          <label className="signup-weight">
            <div className="signup-weight-title">WEIGHT</div>
            <input
              type="text"
              pattern="\d+"
              value={this.props.weight}
              onChange={this.props.update("weight")}
              placeholder="0 lbs"
            />
          </label>
          <label className="signup-height-feet">
            <div className="signup-height-title">HEIGHT (ft.)</div>
            <input
              type="text"
              pattern="\d+"
              value={this.props.heightFeet}
              onChange={this.props.update("heightFeet")}
              placeholder="Feet"
            />
          </label>
          <label className="signup-height-inches">
            <div className="signup-height-title">HEIGHT (in.)</div>
            <input
              type="text"
              pattern="\d+"
              value={this.props.heightInches}
              onChange={this.props.update("heightInches")}
              placeholder="Inches"
            />
          </label>
          {/* <label className="signup-diet">
              <div className="signup-diet"></div>
              <input
                type="text"
                value={this.props.diet}
                onChange={this.props.update("diet")}
              />
            </label>
            <label className="signup-diet">
              <div className="signup-diet"></div>
              <input
                type="text"
                value={this.props.diet}
                onChange={this.props.update("diet")}
              />
            </label> */}
          <label className="signup-target-weight">
            <div className="signup-target-weight-title">TARGET WEIGHT</div>
            <input
              type="text"
              pattern="\d+"
              value={this.props.targetWeight}
              onChange={this.props.update("targetWeight")}
              placeholder="0 lbs"
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Step1;
