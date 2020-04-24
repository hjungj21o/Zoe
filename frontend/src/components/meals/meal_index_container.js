import { connect } from 'react-redux';
import MealIndex from './meal_index';
import {fetchUserMeals} from '../../actions/meal_actions'
import {receiveSelectedDay} from '../../actions/day_actions'

const mapStateToProps = state => ({
    userMeals: state.meals, 
    currentUserId: state.session.user.id, 
    selectedDay: state.selected_day
})

const mapDispatchToProps = dispatch => ({
    fetchUserMeals: data => dispatch(fetchUserMeals(data)),
    receiveSelectedDay: day => dispatch(receiveSelectedDay(day))
})

export default connect(mapStateToProps, mapDispatchToProps)(MealIndex);