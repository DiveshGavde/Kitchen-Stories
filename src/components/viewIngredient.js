import { useState, useCallback, useEffect } from "react";
import { useActionData } from "react-router-dom";
import classes from "./viewIngredient.module.css";
import Ingredient from "./Ingredient";
import Button from "./Button";
import { state } from "../pages/ViewRecipePage";

export default function ViewIngredient({ recipeDetails }) {
  const [servings, setServings] = useState(false);
  const [bookmark, isBookmarked] = useState(false);

  console.log(recipeDetails);

  // let isBookmark;

  // if (state.bookmarks.some((id) => id.id === recipeDetails.id)) {
  //   isBookmark = true;
  // } else isBookmark = false;

  // function addBookmark() {
  //   state.bookmarks.push(recipeDetails);
  //   localStorage.setItem("recipeDetails", JSON.stringify(state.bookmarks));
  //   isBookmarked((toggle) => !toggle);
  // }

  // let storage;
  // let id;
  // let classname;

  // if (typeof localStorage !== "undefined") {
  //   storage = localStorage.getItem("recipeDetails");
  //   id = JSON.parse(storage);
  //   id?.map((serId, index) => {
  //     if (serId.id === recipeDetails.id) {
  //       classname = true;
  //     }
  //   });
  // }

  function upadeServing() {
    recipeDetails.ingredients.forEach((ing) => {
      ing.quantity =
        (ing.quantity * (recipeDetails.servings + 1)) / recipeDetails.servings;
    });
    setServings((toggle) => !toggle);
    recipeDetails.servings += 1;
    recipeDetails.cookingTime += 7;
  }

  function servingsDecrement() {
    recipeDetails.ingredients.forEach((ing) => {
      ing.quantity =
        (ing.quantity * (recipeDetails.servings - 1)) / recipeDetails.servings;
    });
    setServings((toggle) => !toggle);
    recipeDetails.servings -= 1;
    recipeDetails.cookingTime -= 7;
  }

  return (
    <section className="section">
      <h2 className={classes.h2}>Recipe Details</h2>
      <div className={classes.figure}>
        <img src={recipeDetails.image} />
        <span>{recipeDetails.title}</span>
      </div>
      <div className={classes.main_container}>
        <div className={classes.flex_container}>
          <div className={classes.about_recipe}>
            <div className={classes.recipe_cookingtime}>
              <svg
                className={classes.icons}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
              </svg>

              <span>{recipeDetails.cookingTime}</span>
              <span>Minutes</span>
            </div>
            <div className={classes.recipe_cookingtime}>
              <svg
                className={classes.icons}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
              </svg>
              <span>{recipeDetails.servings}</span>
              <span>Servings</span>
            </div>

            <div className={classes.recipe_cookingtime}>
              <button onClick={upadeServing} className={classes.handlebuttons}>
                <svg
                  className={`${classes.icons} ${classes.button_icons}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                </svg>
              </button>

              <button
                disabled={recipeDetails.servings === 1}
                onClick={servingsDecrement}
                className={classes.handlebuttons}
              >
                <svg
                  className={`${classes.icons} ${classes.button_icons}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 11V13H19V11H5Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Ingredient />
      </div>
      <Button content={"Back"} />
    </section>
  );
}

export async function action({ request, params }) {
  console.log(request);
}
