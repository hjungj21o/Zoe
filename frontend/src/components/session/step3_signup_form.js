import React from "react";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <>
        <div className="signup-form-title">
          <h2>
            Finally! Finish Signing up with Zoe and start your customized meal
            plan for a healthy diet today.
          </h2>
        </div>
        <div className="signup-form-container">
          <div className="signup-form-input">
            {this.props.handleErrors()}
            <label className="signup-email">
              <div className="signup-email-title">
                <p>Email Address</p>
              </div>
              <input
                type="text"
                value={this.props.email}
                onChange={this.props.update("email")}
                placeholder="Enter Email"
              />
            </label>
            <label className="signup-password">
              <div className="signup-password-title">
                <p>Password</p>
              </div>
              <input
                type="password"
                value={this.props.password}
                onChange={this.props.update("password")}
                placeholder="Enter Password"
              />
            </label>
            <label className="signup-password">
              <div className="signup-password-title">
                <p>Verify Password</p>
              </div>
              <input
                type="password"
                value={this.props.password2}
                onChange={this.props.update("password2")}
                placeholder="Re-Enter Password"
              />
            </label>
          </div>
        </div>
      </>
    );
  }
}
export default Step3;
