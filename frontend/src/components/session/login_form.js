import React from "react";
import { withRouter, Link } from "react-router-dom";
import login_form from './login_form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/meals");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="login-form-input">
            <label className="login-email">
              EMAIL ADDRESS
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Enter Email Address"
              />
            </label>
            <label className="login-password">
              PASSWORD
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Enter Password"
              />
            </label>
            <div className="login-submit-button">
                <input type="submit" value="Log In" />
            </div>
            <div className="signin-link">
                Not a member yet? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
