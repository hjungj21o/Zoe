import React from "react";
import "./user_profile.css";
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.user_id);
  }

  render() {
    return (
      <div>
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-img">
              <nav className="profile-header">
                <p>Photo</p>
              </nav>
              <div className="profile-image">
                <img src="https://pacebook-seed.s3.amazonaws.com/image/no_image.jpeg" />
                <div className="profile-img-desc">
                  <p>Choose an image from your computer</p>
                  <button>Browse</button>
                  <button className="add-btn">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-information">
            <nav className="profile-header">
              <p>Information</p>
            </nav>
            <div className="profile-full-info">
              <div className="profile-name user-info">
                <p className="user-info-title">Name</p>
                <p>{this.props.user.name}</p>
              </div>
              <nav className="user-info">
                <p className="user-info-title">Diet</p>
                <p>{this.props.user.diet ? this.props.user.diet : "None"}</p>
              </nav>
              <nav className="user-info">
                <p className="user-info-title">Current Weight</p>
                <p>{this.props.user.weight}</p>
              </nav>
              <nav className="user-info">
                <p className="user-info-title">Target Weight</p>
                <p>{this.props.user.targetWeight}</p>
              </nav>
              <nav className="user-info">
                <p className="user-info-title">Target Calories</p>
                <p>{this.props.user.targetCalories}</p>
              </nav>
              <nav className="user-info">
                <p className="user-info-title">Height</p>
                <p>
                  {this.props.user.heightFeet}' {this.props.user.heightInches}"
                </p>
              </nav>
              <nav className="user-info">
                <p className="user-info-title">Exclusions</p>
                <p>{this.props.user.exclusions}</p>
              </nav>
              <nav className="profile-edit-btn">
                <button>Edit</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
