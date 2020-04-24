// import React from "react";
// import { withRouter } from "react-router-dom";
// import "./login_form.css";

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       errors: {},
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.renderErrors = this.renderErrors.bind(this);
//   }

//   // Once the user has been authenticated, redirect to the Tweets page
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.currentUser === true) {
//       this.props.history.push("/meals");
//     }

//     // Set or clear errors
//     this.setState({ errors: nextProps.errors });
//   }

//   // Handle field updates (called in the render method)
//   update(field) {
//     return (e) =>
//       this.setState({
//         [field]: e.currentTarget.value,
//       });
//   }

//   // Handle form submission
//   handleSubmit(e) {
//     e.preventDefault();

//     let user = {
//       email: this.state.email,
//       password: this.state.password,
//     };

//     this.props.login(user).then(
//       this.props.closeModal());
//   }

//   // Render the session errors if there are any
//   renderErrors() {
//     if (Object.keys(this.state.errors).length === 0) {
//       return <></>;
//     } else {
//       return (
//         <ul className="login-errors-ul">
//           {Object.keys(this.state.errors).map((error, i) => (
//             <li key={`error-${i}`}>
//               <p>{this.state.errors[error]}</p>
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }

//   render() {
//     return (
//       <div className="login-form-container">
//         <form>
//           <h1>zoe</h1>
//           {this.renderErrors()}
//           <div className="login-form-input">
//             <label className="login-email">
//               <div className="login-email-title">
//                 <p>Email Address</p>
//               </div>
//               <input
//                 type="text"
//                 value={this.state.email}
//                 onChange={this.update("email")}
//                 placeholder="Enter Email"
//               />
//             </label>
//             <label className="login-password">
//               <div className="login-password-title">
//                 <p>Password</p>
//               </div>
//               <input
//                 type="password"
//                 value={this.state.password}
//                 onChange={this.update("password")}
//                 placeholder="Enter Password"
//               />
//             </label>
//             <button onClick={this.handleSubmit}>Login</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(LoginForm);


import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./login_form.css";
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
  // Once the user has been authenticated, redirect to the meals page
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

    this.props.login(user).then(() => {
      if (Object.values(this.state.errors).length === 0) 
      this.props.closeModal()
    });
  }
  // Render the session errors if there are any
  renderErrors() {
    if (Object.keys(this.state.errors).length === 0) {
      return <></>;
    } else {
      return (
        <ul className="login-errors-ul">
          {Object.keys(this.state.errors).map((error, i) => (
            <li key={`error-${i}`}>
              <p>{this.state.errors[error]}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
  render() {
    return (
      <div className="login-form-container">
        <form>
          <h1>zoe</h1>
          {this.renderErrors()}
          <div className="login-form-input">
            <label className="login-email">
              <div className="login-email-title">
                <p>Email Address</p>
              </div>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Enter Email"
              />
            </label>
            <label className="login-password">
              <div className="login-password-title">
                <p>Password</p>
              </div>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Enter Password"
              />
            </label>
            <button onClick={this.handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(LoginForm);