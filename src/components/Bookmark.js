import ViewRecipe from "../pages/ViewRecipePage";
import classes from "./Bookmark.module.css";

import { Link } from "react-router-dom";

export default function Bookmark({ addedRecipe }) {
  const localStorageData = localStorage.getItem("recipeDetails");
  let recipeData;
  if (localStorageData) {
    recipeData = JSON.parse(localStorageData);
  }

  return (
    <div
      className={`${classes.view_bookmarks} ${
        addedRecipe ? "" : classes.hide
      } `}
    >
      {!recipeData && (
        <ul>
          <li>
            <p>You have not added any recipes yet</p>
          </li>
        </ul>
      )}
      {recipeData?.map((details) => (
        <div key={details.id} id={classes.view_recipe}>
          <ul className={classes.added_recipe}>
            <li>
              <Link to={details.id} className={classes.recipe_list}>
                <figure className={classes.figure}>
                  <img
                    className={classes.image_recipe}
                    src={details.image_url}
                  />
                </figure>
                <div>
                  <ul className={classes.added_recipe}>
                    <li className={classes.recipe_title}>{details.title}</li>
                    <li id={classes.publisher}>{details.publisher}</li>
                  </ul>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
