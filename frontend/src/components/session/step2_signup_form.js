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
                  <label>
                    <input
                      type="checkbox"
                      name="dairy"
                      checked={this.props.checkedOrNah("dairy")}
                      onChange={this.props.updateCheckBox("dairy")}
                    />
                    Dairy
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="egg"
                      checked={this.props.checkedOrNah("egg")}
                      onChange={this.props.updateCheckBox("egg")}
                    />
                    Eggs
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="Gluten Free"
                      checked={this.props.checkedOrNah("Gluten Free")}
                      onChange={this.props.updateCheckBox("Gluten Free")}
                    />
                    Gluten
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="grain"
                      checked={this.props.checkedOrNah("grain")}
                      onChange={this.props.updateCheckBox("grain")}
                    />
                    Grains
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="peanut"
                      checked={this.props.checkedOrNah("peanut")}
                      onChange={this.props.updateCheckBox("peanut")}
                    />
                    Peanuts
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="seafood"
                      checked={this.props.checkedOrNah("seafood")}
                      onChange={this.props.updateCheckBox("seafood")}
                    />
                    Seafood
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="sesame"
                      checked={this.props.checkedOrNah("sesame")}
                      onChange={this.props.updateCheckBox("sesame")}
                    />
                    Sesame
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="shellfish"
                      checked={this.props.checkedOrNah("shellfish")}
                      onChange={this.props.updateCheckBox("shellfish")}
                    />
                    Shellfish
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="soy"
                      checked={this.props.checkedOrNah("soy")}
                      onChange={this.props.updateCheckBox("soy")}
                    />
                    Soy
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="sulfite"
                      checked={this.props.checkedOrNah("sulfite")}
                      onChange={this.props.updateCheckBox("sulfite")}
                    />
                    Sulfite
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="tree nut"
                      checked={this.props.checkedOrNah("tree nut")}
                      onChange={this.props.updateCheckBox("tree nut")}
                    />
                    Tree Nuts
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      name="wheat"
                      checked={this.props.checkedOrNah("wheat")}
                      onChange={this.props.updateCheckBox("wheat")}
                    />
                    Wheat
                  </label>
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