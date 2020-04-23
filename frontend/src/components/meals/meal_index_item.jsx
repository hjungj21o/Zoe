import React from 'react'
import { Link } from 'react-router-dom'; 


class MealIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        //debugger
        let url = `/meals/${this.props.meal.spoonacularMealId}`
        // debugger
        return(
            
            <li>
                <div className="meal-preview">
                    <div className="meal-preview-img">
                        <Link to={url}>
                            <img src={this.props.meal.image} />
                        </Link>
                    </div>
                    <div className="meal-preview-text">
                        <Link to={url}>
                            <p>{this.props.meal.title}</p>
                        </Link>
                        <p>{this.props.meal.readyInMinutes}</p>
                        <p>{this.props.meal.servings}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default MealIndexItem