import React from 'react' 
import MealIndexItem from './meal_index_item'
import './meals.css'

class DaysMealsCard extends React.Component {

    constructor(props){
        super(props)
        let current_date_arr = this.props.day.toString().split(" ").slice(1, 4);
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        
       
        let yr = current_date_arr[2]; 
        let day = current_date_arr[1]; 
        let month = (months.indexOf(current_date_arr[0]) + 1).toString(); 

        this.dateString = yr + '-' + month + '-' + day; 
        this.handleClick=this.handleClick.bind(this); 
        this.fullDateString = current_date_arr.slice(0, 2).join(" ") + ", " + current_date_arr.slice(2);

       
    }

    handleClick(e){
        e.preventDefault(); 
        
        let id = this.props.currentUserId; 
        let data = {userId: id, mealDate: this.dateString}; 
        
        this.props.fetchUserMeals(data); 
        this.props.receiveSelectedDay(this.props.day)
       
        
    }

    render(){

        let test = this.props.meals.length != 0 ? this.props.meals.map((meal, index) => {
            return (
                <MealIndexItem key={index} meal={meal}/>
            )
        })
        : "";

        let display = this.props.day === this.props.selectedDay ? "showme" : "hideme";

        
        return(
            <>
                <div onClick={this.handleClick} className="day-label">
                    <p>{this.props.day.toString().split(" ")[0]}</p>
                </div>
                <div className={`day-item ${display}`}>
                    <h1>{this.fullDateString}</h1>
                    <ul>
                        {test} {/* <MealIndexItem /> */}
                    </ul>
                </div>
            </>
        )
    }
}

export default DaysMealsCard