import React from "react";

class Step2 extends React.Component {
  
    
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    // debugger;
    return (
      <div className="signup-form-container">
        {/* // <div className="signup-form-input"> */}
        <div className="signup-form-title">
          <h2>
            We're almost there. Do you have any dietary restrictions and/or
            allergies, and what is your goal?
          </h2>
        </div>
        <div className="signup-form-input">
          {this.props.handleErrors()}
          <label className="signup-diet">
            <div className="signup-diet-title">
              <p>Dietary Restrictions</p>
            </div>
            <select
              value={this.props.diet}
              onChange={this.props.update("diet")}
            >
              <option defaultValue>Regular</option>
              <option>Vegetarian</option>
              <option>Gluten Free</option>
              <option>Ketogenic</option>
              <option>Kosher</option>
              <option>Halal</option>
            </select>
          </label>
          <label className="signup-exclusions">
            <div className="signup-exclusion">
              <p className="signup-exclusion-title">Avoids</p>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="Dairy Free"
                    //checked={this.props.checkboxes.one}
                    onChange={this.props.updateCheckBox}
                  />
                  <p>Dairy</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Egg Free"
                    onChange={this.props.updateCheckBox}
                  />
                  <p>Eggs</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Gluten Free"
                    onChange={this.props.updateCheckBox}
                  />
                  <p>Gluten</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Grain Free"
                    onChange={this.props.updateCheckBox}
                  />
                  <p>Grains</p>
                </li>
              </ul>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="Peanut Free"
                    onChange={this.props.updateCheckBox}
                  />
                  <p>Peanuts</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Seafood Free"
                    onClick={this.props.updateCheckBox}
                  />
                  <p>Seafood</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Sesame Free"
                    onClick={this.props.updateCheckBox}
                  />
                  <p>Sesame</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Shellfish Free"
                    onClick={this.props.updateCheckBox}
                  />
                  <p>Shellfish</p>
                </li>
              </ul>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="Soy Free"
                    onClick={this.props.updateCheckBox}
                  />
                  <p>Soy</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Sulfite Free"
                    onClick={this.props.updateCheckBox}
                  />
                  <p>Sulfite</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Tree Nut Free"
                    onClick={this.props.updateCheckBox}
                  />
                  <p>Tree Nuts</p>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="Wheat Free"
                    onClick={this.props.updateCheckBox}
                  />
                  <p>Wheat</p>
                </li>
              </ul>
            </div>
          </label>
          <label className="signup-target-weight">
            <div className="signup-target-weight-title">
              <p>Target Weight</p>
            </div>
            <input
              type="number"
              min="1"
              max="999"
              value={this.props.targetWeight}
              onChange={this.props.update("targetWeight")}
              placeholder="Pounds"
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Step2; 