import classes from "./AppReview.module.css";
import { useState } from "react";
import Testimonial from "./Testimonial";

export default function AppReview() {
  const [isOpen, setIsOpen] = useState(false);

  const { innerWidth, innerHeigth } = window;

  const checkWidth = innerWidth <= 850;
  console.log(checkWidth);
  function OpenReviewPage() {
    setIsOpen((toggle) => !toggle);
  }
  return (
    <div className={classes.aboutus_page}>
      <div>
        <button onClick={OpenReviewPage} className={classes.aboutus_btn}>
          About us
          <span className={isOpen ? `${classes.arrow_btn}` : ""}>&uarr;</span>
        </button>
      </div>
      {(isOpen || checkWidth) && (
        <div className={classes.wrapper}>
          <h2 className={classes.aboutus_heading}>
            Once You Try It,You Can Not Go Back
          </h2>
          <div className={classes.customers_review}>
            <Testimonial />
          </div>
        </div>
      )}
    </div>
  );
}
