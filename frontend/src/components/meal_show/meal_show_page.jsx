import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

class MealShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchMeal(this.props.match.params.meal_id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.meal_id !== this.props.match.params.meal_id) {
      this.props.fetchMeal(this.props.match.params.meal_id);
    }
  }

  render() {
    const { meal } = this.props;

    let mealInfo;
    if (meal) {
      const mealInstructionsHtml =
        "<span> <h2>Instructions</h2>  " + meal.instructions + "</span>";
      let mealSummary = meal.summary;

      mealSummary = mealSummary.slice(
        0,
        mealSummary.indexOf("All things considered")
      );
      mealSummary = mealSummary.slice(
        0,
        mealSummary.indexOf("Taking all factors into account")
      );

      mealInfo = (
        <div className="main-container2">
          <div className="main-text-container">
            <div className="meals-text-top">
              <Link to="/meals"><i className="fas fa-arrow-left"></i></Link>
              <h1>{meal.title}</h1>
              <div className="image-container">
                <img className="big-image" src={meal.image} />
                <div className="meal-summary"><p>{parse(mealSummary)}</p></div>
              </div>
            </div>
            <div className="meal-details">
              <hr />
              <div className="meals-instructions">
                <div className="ingredients-only">
                  
                  <h2>Ingredients</h2>
                  <ul>
                    {meal.ingredients.map((ingredient, index) => {
                      return <li key={index}><p>{ingredient}</p></li>;
                    })}
                  </ul>
                </div>
                <hr />
                <div className="instructions-only">
                  <p>{parse(mealInstructionsHtml)}</p>
                </div>
              </div>

              {/* <div className="image-container">
                <img className="big-image" src={meal.image} />
              </div> */}
            </div>
          </div>
        </div>
      );
    } else {
      mealInfo = "";
    }
    return <div>{mealInfo}</div>;
  }
}

export default MealShowPage;
