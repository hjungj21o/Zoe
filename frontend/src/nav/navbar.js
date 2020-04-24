import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";
import LoginFormContainer from "../components/session/login_form_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: "" };
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout()
    this.props.history.push("/");
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modal: "active" });
    this.props.clearErrors();
  }

  closeModal() {
    this.setState({ modal: "" });
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="profile-logout">
          <Link to={`/users/profile/${this.props.userId}`}>
            <button>
              <p>Profile</p>
            </button>
          </Link>
          <button onClick={this.logoutUser}>
            <p>Logout</p>
          </button>
        </div>
      );
    } else {
      return (
        <div className="signup-login">
          <Link to={"/signup"}>
            <button>
              <p>Sign Up</p>
            </button>
          </Link>
          <button onClick={this.openModal}>
            <p>Login</p>
          </button>
        </div>
      );
    }
  }

  render() {
    let topNav;
    if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/signup"
    ) {
      topNav = "top-bar";
      // } else if (this.props.location.pathname === "/signup") {
      //   topNav = "top-bar inactive";
    } else {
      topNav = "top-bar other";
    }

    return (
      <>
        <div
          className={`login-modal-background ${this.state.modal}`}
          onClick={this.closeModal}
        >
          <div
            className={`login-modal ${this.state.modal}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div onClick={this.closeModal} className="modal-x">
              <p>
                <i className="fas fa-times"></i>
              </p>
            </div>
            <LoginFormContainer closeModal={this.closeModal} />
          </div>
        </div>
        <div className={topNav}>
          <Link to={"/"}>
            <h1>zoe</h1>
          </Link>
          {this.getLinks()}
        </div>
      </>
    );
  }
}

export default withRouter(NavBar);
