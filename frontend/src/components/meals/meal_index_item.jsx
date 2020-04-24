import React from "react";
import { Link } from "react-router-dom";

class MealIndexItem extends React.Component {
  render() {
    let url = `/meals/${this.props.meal.spoonacularMealId}`;
    let meal;
    if (this.props.index === 0) {
      meal = "Breakfast";
    } else if (this.props.index === 1) {
      meal = "Lunch";
    } else {
      meal = "Dinner";
    }

    return (
      <li>
        <div className="meal-preview">
          <nav className="meal-preview-day">
            <p>{meal}</p>
          </nav>
          <div className="meal-preview-img">
            <Link to={url}>
              <img src={this.props.meal.image} />
            </Link>
          </div>
          <div className="meal-preview-text">
            <nav className="meal-preview-text-title">
              <Link to={url}>
                <p>{this.props.meal.title}</p>
              </Link>
            </nav>
            <hr />
            <nav className="meal-preview-text-desc">
              <p>
                <i class="far fa-clock"></i> {this.props.meal.readyInMinutes}{" "}
                minutes
              </p>
              <p>
                <i class="far fa-user"></i> {this.props.meal.servings} servings
              </p>
            </nav>
            <nav className="meal-preview-btn">
              <Link to={url}>
                <button>View Recipe</button>
              </Link>
            </nav>
          </div>
          <nav className="fav-recipe">
            <i className="far fa-heart"></i>
          </nav>
        </div>
      </li>
    );
  }
}

export default MealIndexItem;
