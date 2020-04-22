import React from "react";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    return (
      <div className="signup-form-container">
        {this.renderErrors()}
        <form onSubmit={this.props.handleSubmit}>
          <div className="signup-form-input">
            <label className="signup-name">
              <div className="signup-name-title">NAME</div>
              <input
                type="text"
                value={this.props.name}
                onChange={this.update("name")}
                placeholder="First Last"
              />
            </label>
            <label className="signup-gender">
              <div className="signup-gender-title">GENDER</div>
              <select
                value={this.props.gender}
                onChange={this.update("gender")}
                placeholder="Select Gender">
                    <option>M</option>
                    <option>F</option>
              </select>
            </label>
            <label className="signup-weight">
              <div className="signup-weight-title">WEIGHT</div>
              <input
                type="text"
                patter="\d+"
                value={this.props.weight}
                onChange={this.update("weight")}
                placeholder="0 lbs"
              />
            </label>
            <label className="signup-height-feet">
              <div className="signup-height-title">HEIGHT (ft.)</div>
              <input
                type="text"
                patter="\d+"
                value={this.props.heightFeet}
                onChange={this.update("heightFeet")}
                placeholder="Feet"
              />
            </label>
            <label className="signup-height-inches">
              <div className="signup-height-title">HEIGHT (in.)</div>
              <input
                type="text"
                patter="\d+"
                value={this.props.heightInches}
                onChange={this.update("heightInches")}
                placeholder="Feet"
              />
            </label>
            <label className="signup-height-inches">
              <div className="signup-height-title">HEIGHT (in.)</div>
              <input
                type="text"
                patter="\d+"
                value={this.props.heightInches}
                onChange={this.update("heightInches")}
                placeholder="Inches"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
