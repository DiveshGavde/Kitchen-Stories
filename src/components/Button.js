import classes from "./Button.module.css";

import { Link } from "react-router-dom";

export default function Button({ content }) {
  return (
    <div className={classes.back_button}>
      <Link to="/search">
        <button>{content}</button>
      </Link>
    </div>
  );
}
