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

        this.state= {display: "dontshow"}

       
    }

    handleClick(e){
        e.preventDefault(); 
        
        let id = this.props.currentUserId; 
        let data = {userId: id, mealDate: this.dateString}; 
        
        this.props.fetchUserMeals(data); 
        this.props.receiveSelectedDay(this.props.day)
       
        
    }

    render(){
        //debugger
        let test = this.props.meals.length != 0 ? this.props.meals[0].title : "";
        let display = this.props.day === this.props.selectedDay ? "showme" : "hideme"
        return(
            <>
                <div onClick={this.handleClick}>
                    {this.props.day.toString().split(" ")[0]}
                   <div className={display}>
                    {test}
                    </div>
                </div>
            </>
        )
    }
}

export default DaysMealsCard