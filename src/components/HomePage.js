import classes from "./HomePage.module.css";
import Welcome from "./WelcomeMessage";
import { Link, useNavigation } from "react-router-dom";

export default function HomePage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";
  console.log(isLoading);
  return (
    <main className={classes.main_page}>
      <header>
        <div className="branding">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path>
          </svg>
          <h2>Kitchen Stories</h2>
        </div>
        <div className={classes.nav_bar}>
          <div className={classes.spans}>
            <button>Home</button>
            <Link to="/search">
              <button>Recipes</button>
            </Link>
            {/* <button>About Us</button>
            <button>Article</button> */}
          </div>
        </div>
        {/* <div className={classes.icons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div> */}
      </header>
      <Welcome />
    </main>
  );
}
