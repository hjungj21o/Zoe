import React from "react";
import "./home_page.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="home-text-container">
          <h1>Healthy Eating Habits Made Incredibly Simple.</h1>
          <h3>
            Zoe provides personalized meal recommendations and coaching to help
            you live the life of your dreams.
          </h3>
          <Link to="/signup">
            <button>
              <p>Sign Up</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
