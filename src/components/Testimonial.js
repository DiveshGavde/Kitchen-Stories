import classes from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <>
      <figure className={classes.reviews}>
        <img src="ben.jpg" alt="customer-img" />
        <p>
          healthy and great-tasting meals , with vast collection of recipes ! It
          feels truly magical.
        </p>
        <span>- Ben Drave</span>
      </figure>
      <figure className={classes.reviews}>
        <img src="customer-3.jpg" alt="customer-img" />
        <p>
          This is the app where you can learn and cook a variety of recipes like
          resturant-style recipe and healty tips at home.
        </p>
        <span>- Rose </span>
      </figure>
      <figure className={classes.reviews}>
        <img src="dave.jpg" alt="customer-img" />
        <p>
          The secret at the table is to start with healty and tasty foods,And
          Kitchen stories is perfect for these things.
        </p>
        <span>- Dave Bryson</span>
      </figure>
      <figure className={classes.reviews}>
        <img src="steve.jpg" alt="customer-img" />
        <p>
          Kitchen stories is life saver!I love to cook on my free times and I
          think this app is perfect.
        </p>
        <span>- Steve Michael</span>
      </figure>
    </>
  );
}
