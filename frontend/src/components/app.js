import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import MealIndexContainer from "./meals/meal_index_container"

import NavBarContainer from "../nav/navbar_container";
import HomePage from "./home/home_page";
import './meals/meals.css'
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MealShowPageContainer from "./meal_show/meal_show_page_container";

const App = () => (
  <div className="uhoh">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={HomePage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/meals" component={MealIndexContainer} /> 
    </Switch>
    <Route path="/meals/:meal_id" component={MealShowPageContainer} />
  </div>
);

export default App;
