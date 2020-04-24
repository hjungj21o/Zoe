import React from "react";

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
        <h1>{this.props.user.name}</h1>
        <h1>{this.props.user.diet}</h1>
        <h2>{this.props.user.targetWeight}</h2>
        <h2>{this.props.user.targetCalories}</h2>
        <h2>{this.props.user.heightFeet}</h2>
        <h2>{this.props.user.heightInches}</h2>
        <h2>{this.props.user.exclusions}</h2>
      </div>
    );
  }
}

export default UserProfile;
