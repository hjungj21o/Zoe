import React from "react";

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
    debugger;
    const { meal } = this.props;
    let mealInfo;
    if (meal) {
      mealInfo = (
        <div>
          <h1>{meal.title}</h1>
          <img src={meal.image} />
          <ul>
            {meal.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
          <p>{meal.instructions}</p>
        </div>
      );
    } else {
      mealInfo = "";
    }
    return <div>{mealInfo};</div>;
  }
}

export default MealShowPage;
