import { Link } from "react-router-dom";
import classes from "./welcome.module.css";
export default function Welcome() {
  return (
    <div className={`container ${classes.message}`}>
      <div>
        <h2>The Easiest Way To Make Your Favorite Meal</h2>
        <p className={classes.description}>
          Discover 1,00,000+recipes in your hand with the best recipe.Help you
          to find the easiest way to cook
        </p>
        <Link to="search">
          <button className={classes.searchbtn}>Explore Recipe</button>
        </Link>
      </div>
      <div>
        <img className={classes.recipe1} src="hero-min.png" />
      </div>
    </div>
  );
}
