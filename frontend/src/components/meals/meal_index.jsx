import React from "react";
import DaysMealsCard from "./days_meals_card";
import "./meals.css";

class MealIndex extends React.Component {
  constructor(props) {
    super(props);

    this.week = [];
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    this.today = new Date();
    let current_date_arr = this.today.toString().split(" ");
    let offset = days.indexOf(current_date_arr[0]);

    let monday = new Date(this.today);
    monday.setDate(monday.getDate() - offset);
    this.week.push(monday);

    let tuesday = new Date(monday);
    tuesday.setDate(tuesday.getDate() + 1);
    this.week.push(tuesday);

    let wednesday = new Date(tuesday);
    wednesday.setDate(wednesday.getDate() + 1);
    this.week.push(wednesday);

    let thursday = new Date(wednesday);
    thursday.setDate(thursday.getDate() + 1);
    this.week.push(thursday);

    let friday = new Date(thursday);
    friday.setDate(friday.getDate() + 1);
    this.week.push(friday);

    let saturday = new Date(friday);
    saturday.setDate(saturday.getDate() + 1);
    this.week.push(saturday);

    let sunday = new Date(saturday);
    sunday.setDate(sunday.getDate() + 1);
    this.week.push(sunday);
  }

  render() {
    let day_meal_cards = this.week.map((day) => {
      return (
        <DaysMealsCard
          day={day}
          fetchUserMeals={this.props.fetchUserMeals}
          meals={this.props.userMeals}
          currentUserId={this.props.currentUserId}
          receiveSelectedDay={this.props.receiveSelectedDay}
          selectedDay={this.props.selectedDay}
        />
      );
    });

    return (
      <div className="days">
        <div className="day-meal-container">{day_meal_cards}</div>
      </div>
    );
  }
}

export default MealIndex;
