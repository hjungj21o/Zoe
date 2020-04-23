import React from "react";
import parse from "html-react-parser";

class MealShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMeal(this.props.match.params.meal_id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.meal_id !== this.props.match.params.meal_id) {
      this.props.fetchMeal(this.props.match.params.meal_id);
    }
  }

  render() {
    // debugger;
    const { meal } = this.props;
    
    let mealInfo;
    if (meal) {

      const mealInstructionsHtml = "<span> <h2>Instructions</h2>  "+meal.instructions+"</span>" ;
      
      mealInfo = (
        <div>
          <h1>{meal.title}</h1>
          <img src={meal.image} />

          <span>
            <h2>Ingredients</h2>
            <ul>
              {meal.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </span>
          {parse(mealInstructionsHtml)}
        </div>
      );
    } else {
      mealInfo = "";
    }
    return <div>{mealInfo};</div>;
  }
}

export default MealShowPage;
