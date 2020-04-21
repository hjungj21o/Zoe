import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/profile"}><p>Profile</p></Link>
          <button onClick={this.logoutUser}><p>Logout</p></button>
        </div>
      );
    } else {
      return (
        <div className="signup-login">
          <Link to={"/signup"}><button><p>Signup</p></button></Link>
          <Link to={"/login"}><button><p>Login</p></button></Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="top-bar">
        <h1>zoe</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
