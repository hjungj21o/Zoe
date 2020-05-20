import React from "react";
import "./user_profile.css";
import "./edit_user_profile.css"; 
class UserProfile extends React.Component {
  constructor(props){
    super(props); 
    this.state = { isEditing: false,
      heightFeet: Number(this.props.user.heightFeet),
      heightInches: Number(this.props.user.heightInches),
      targetWeight: Number(this.props.user.targetWeight),
      weight: Number(this.props.user.weight),
      name: this.props.user.name,
      diet: this.props.user.diet,
      exclusions: this.props.user.exclusions ? this.props.user.exclusions : []
    };
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this); 
    this.updateCheckBox2 = this.updateCheckBox2.bind(this); 
    this.checkedOrNah2 = this.checkedOrNah2.bind(this); 
    debugger
  }
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.user_id);
  }

  componentDidUpdate(prevProps){
    if (this.props.user !== prevProps.user){
      debugger
      this.setState({
        isEditing: false,
        heightFeet: Number(this.props.user.heightFeet),
        heightInches: Number(this.props.user.heightInches),
        targetWeight: Number(this.props.user.targetWeight),
        weight: Number(this.props.user.weight),
        name: this.props.user.name,
        diet: this.props.user.diet,
        exclusions: this.props.user.exclusions ? this.props.user.exclusions : []
      })
    }
  }
  handleEdit(e){
    e.preventDefault(); 
    this.setState({isEditing: true})
  }
  handleSubmit(e){
    e.preventDefault(); 
    let new_user = {
      heightFeet: Number(this.state.heightFeet),
      heightInches: Number(this.state.heightInches),
      targetWeight: Number(this.state.targetWeight),
      weight: Number(this.state.weight),
      name: this.state.name, 
      diet: this.state.diet,
      //target calories, 
      exclusions: this.state.exclusions
    }
    debugger
 
    this.props.editUserProfile(this.props.match.params.user_id, new_user); 
    this.setState({isEditing: false}); 
  }
  update(field) {
   
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
      
  }
  updateCheckBox2(val) {
    let exclusionValues = this.state.exclusions;
    return () => {
      if (exclusionValues.includes(val)) {
        const targetIdx = exclusionValues.indexOf(val);
        exclusionValues.splice(targetIdx, 1);
      } else {
        exclusionValues.push(val);
      }
      this.setState(this.state);
    };
  }

  checkedOrNah2(val) {
    return this.state.exclusions.includes(val) ? true : false;
  }

  render() {
    
    let exclusion_list = [];
    if(this.props.user.exclusions){
      this.props.user.exclusions.forEach(ex => {
        let item = <li>{ex}</li>
        exclusion_list.push(item)
      })
    }
    if(!this.state.isEditing){
      return (
        <div>
          <div className="profile-container">
            <div className="profile-sidebar">
              <div className="profile-img">
                <nav className="profile-header">
                  <p>Photo</p>
                </nav>
                <div className="profile-image">
                  <img
                    src="https://pacebook-seed.s3.amazonaws.com/image/no_image.jpeg"
                    alt="profile"
                  />
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
                  <p>{Math.round(this.props.user.targetCalories)}</p>
                </nav>
                <nav className="user-info">
                  <p className="user-info-title">Height</p>
                  <p>
                    {this.props.user.heightFeet}' {this.props.user.heightInches}"
                  </p>
                </nav>
                <nav className="user-info">
                  <p className="user-info-title">Exclusions</p>
                  {/* <p>{this.props.user.exclusions}</p>  */}
                  <ul>
                    {exclusion_list}
                  </ul>
                  
                  
                </nav>
                <nav className="profile-edit-btn">
                  <button onClick={this.handleEdit}>Edit</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
      return(
      <div>
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="profile-img">
              <nav className="profile-header">
                <p>Photo</p>
              </nav>
              <div className="profile-image">
                <img
                  src="https://pacebook-seed.s3.amazonaws.com/image/no_image.jpeg"
                  alt="profile"
                />
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
            <form className='profile-form'>
              <label>Name: 
                <input type="text" onChange={this.update("name")} placeholder={this.props.user.name} />
              </label>
              <label>Diet:
               
                  <select
                    value={this.state.diet ? this.state.diet : 'Regular'}
                    onChange={this.update("diet")}
                  >
                    <option value="Regular">Regular</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Kosher">Kosher</option>
                    <option value="Halal">Halal</option>
                  </select>
              </label>
              <label>
                Current Weight: 
                  <input type="text" onChange={this.update("weight")}placeholder={this.props.user.weight}/>
              </label>
                <label>Target Weight:
                  <input type="text" onChange={this.update("targetWeight")} placeholder={this.props.user.targetWeight} />
                </label>
                <label>Height:
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={this.props.heightFeet}
                    onChange={this.update("heightFeet")}
                    placeholder={this.props.user.heightFeet}
                  />
                  <input
                    type="number"
                    min="0"
                    max="11"
                    value={this.props.heightInches}
                    onChange={this.update("heightInches")}
                    placeholder={this.props.user.heightInches}
                  />
                </label>
                <label>Exclusions: 
                <ul>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="dairy"
                        checked={this.checkedOrNah2("dairy")}
                        onChange={this.updateCheckBox2("dairy")}
                      />
                    Dairy
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="egg"
                        checked={this.checkedOrNah2("egg")}
                        onChange={this.updateCheckBox2("egg")}
                      />
                    Eggs
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="Gluten Free"
                        checked={this.checkedOrNah2("Gluten Free")}
                        onChange={this.updateCheckBox2("Gluten Free")}
                      />
                    Gluten
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="grain"
                        checked={this.checkedOrNah2("grain")}
                        onChange={this.updateCheckBox2("grain")}
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
                        checked={this.checkedOrNah2("peanut")}
                        onChange={this.updateCheckBox2("peanut")}
                      />
                    Peanuts
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="seafood"
                        checked={this.checkedOrNah2("seafood")}
                        onChange={this.updateCheckBox2("seafood")}
                      />
                    Seafood
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="sesame"
                        checked={this.checkedOrNah2("sesame")}
                        onChange={this.updateCheckBox2("sesame")}
                      />
                    Sesame
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="shellfish"
                        checked={this.checkedOrNah2("shellfish")}
                        onChange={this.updateCheckBox2("shellfish")}
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
                        checked={this.checkedOrNah2("soy")}
                        onChange={this.updateCheckBox2("soy")}
                      />
                    Soy
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="sulfite"
                        checked={this.checkedOrNah2("sulfite")}
                        onChange={this.updateCheckBox2("sulfite")}
                      />
                    Sulfite
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="tree nut"
                        checked={this.checkedOrNah2("tree nut")}
                        onChange={this.updateCheckBox2("tree nut")}
                      />
                    Tree Nuts
                  </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="wheat"
                        checked={this.checkedOrNah2("wheat")}
                        onChange={this.updateCheckBox2("wheat")}
                      />
                    Wheat
                  </label>
                  </li>
                </ul>
                </label>

              <button onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default UserProfile;
