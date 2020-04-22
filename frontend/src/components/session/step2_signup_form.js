import React from "react";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <>
        <div className="signup-form-title">
          Sign up with Zoe and start your customized meal plan for a healthy
          diet.
        </div>
        <div className="signup-form-container">
          {/* {this.renderErrors()} */}
          <div className="signup-form-input">
            <label className="signup-email">
              <div className="signup-email-title">EMAIL ADDRESS</div>
              <input
                type="text"
                value={this.props.email}
                onChange={this.props.update("email")}
                placeholder="Enter Email"
              />
            </label>
            <label className="signup-password">
              <div className="signup-password-title">PASSWORD</div>
              <input
                type="password"
                value={this.props.password}
                onChange={this.props.update("password")}
                placeholder="Enter Password"
              />
            </label>
            <label className="signup-password">
              <div className="signup-password-title">VERIFY PASSWORD</div>
              <input
                type="password"
                value={this.props.password2}
                onChange={this.props.update("password")}
                placeholder="Re-Enter Password"
              />
            </label>
          </div>
        </div>
      </>
    );
  }
}
export default Step2;
