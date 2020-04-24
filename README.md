# Zoe

The word "diet" descends from the Greek root "dieta", but we're not here to DIE. We're here to LIVE.
Inspired by the Greek root Zoe, meaning "life", we bring you a personal assistant designed to provide you meals and recipes to fit your health goals.

# Live Demo
[ZOE - Live Demo](http://healthy-zoe.herokuapp.com/#/)

![Zoe - Splash Page](https://user-images.githubusercontent.com/57606555/80245437-ac95a400-8638-11ea-9f7b-b4d5a1c814ee.png)

# Technical Challenges & Breakthroughs
1. Spoonacular API - Integrated an API to generate over 360,000 recipes and meal plans specifically designed to fit the user's needs.

```JavaScript
router.get("/user/:user_id/meals/:meal_date", (req, res) => {
  Meal.find({
    userId: req.params.user_id,
    mealDate: req.params.meal_date,
  })
    .then((meals) => {
      if (meals.length > 0) {
        return res.json(meals);
      } else {
        const user = User.findById(req.params.user_id);
        axios({
          method: "GET",
          url:
            "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.API_KEY,
          },
          params: {
            targetCalories: user.targetCalories,
            timeFrame: "day",
            diet: user.diet,
          },
        })
          .then((response) => {
            data = response;
            let meals = data.data.meals;
            const resMeals = [];
            meals.forEach((meal) => {
              let new_meal = new Meal({
                spoonacularMealId: meal.id,
                title: meal.title,
                image: `https://spoonacular.com/recipeImages/${meal.id}-312x231`,
                readyInMinutes: meal.readyInMinutes,
                servings: meal.servings,
                mealDate: req.params.meal_date,
                userId: req.params.user_id,
              });
              resMeals.push(new_meal);
              new_meal.save();
            });
            return res.json(resMeals);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch(() => {});
});
```
2. Multi-page form using React - In order to utilize a multi-step process to build on boilerplate user auth, we created a parent container which stored all the logic,
while having children components render what it needed to render to the user.

![parent-children](https://user-images.githubusercontent.com/57606555/80246349-40b43b00-863a-11ea-9fa3-fd6eaea52c0a.png)

# Team Roles & Breakdowns
**Jo Chen** Supreme Leader of the group.
**Ken Ting** Backend Wizard.
**June Seong** Frontend Goddess.
**Marwa Elnashar** Bicep Flex 1.
**Haejun Chung** Bicep Flex 2.

For more information, visit our Wiki page.
