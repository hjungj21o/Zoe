import React from "react";
import MealIndexItem from "./meal_index_item";
import "./meals.css";
import Footer from "../footer/footer";

class DaysMealsCard extends React.Component {
  constructor(props) {
    super(props);
    let current_date_arr = this.props.day.toString().split(" ").slice(1, 4);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let yr = current_date_arr[2];
    let day = current_date_arr[1];
    let month = (months.indexOf(current_date_arr[0]) + 1).toString();

    this.dateString = yr + "-" + month + "-" + day;
    this.handleClick = this.handleClick.bind(this);
    this.fullDateString =
      current_date_arr.slice(0, 2).join(" ") + ", " + current_date_arr.slice(2);
  }

  handleClick(e) {
    debugger
    e.preventDefault();

    let id = this.props.currentUserId;
    let data = { userId: id, mealDate: this.dateString };

    this.props.fetchUserMeals(data);
    this.props.receiveSelectedDay(this.props.day);
  }

  componentDidMount() {
    debugger
    let today = new Date();
    let id = this.props.currentUserId;
    let data = { userId: id, mealDate: this.dateString };

    if (
      this.props.day.getUTCMonth() === today.getUTCMonth() &&
      this.props.day.getUTCDate() === today.getUTCDate() &&
      this.props.day.getUTCFullYear() === today.getUTCFullYear()
    ) {
      
      this.props.fetchUserMeals(data).then((meals) => console.log(meals)).catch((error) => console.log(error)); 
      debugger 
    }

    debugger
  }

  render() {
    debugger
    let styleClass; 
   
    if (this.props.selectedDay.toString().split(" ")[0] === this.props.day.toString().split(" ")[0])
    {
      styleClass = 'highlight-me'; 
     
    }else{
      styleClass = ""; 
    }
    
    let days_meals =
      this.props.meals.length !== 0
        ? this.props.meals.map((meal, index) => {
            return <MealIndexItem key={index} meal={meal} index={index} />;
          })
        : "";

    let display =
      this.props.day.getUTCMonth() === this.props.selectedDay.getUTCMonth() &&
      this.props.day.getUTCDate() === this.props.selectedDay.getUTCDate() &&
      this.props.day.getUTCFullYear() ===
        this.props.selectedDay.getUTCFullYear()
        ? "showme"
        : "hideme";

    return (
      <>
        <div
          onClick={this.handleClick}
          onMouseOver={this.activeLine}
          onMouseOut={this.deactiveLine}
          className="day-label"
        >
          <p className={styleClass}>{this.props.day.toString().split(" ")[0]}</p>
          {/* <nav className={this.state.line}></nav> */}
        </div>
        <div className={`day-item ${display}`}>
          <ul className="date-container">
            <div className="day-header">
              <h1>This Week's Meal Plan</h1>
              <p>{this.fullDateString}</p>
            </div>
            <nav className="days-meals">
              <ul>{days_meals}</ul>
            </nav>
            {/* <Footer klass="index-footer" /> */}
          </ul>
        </div>
      </>
    );
  }
}

export default DaysMealsCard;
