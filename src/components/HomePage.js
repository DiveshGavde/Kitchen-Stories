import classes from "./HomePage.module.css";
import Welcome from "./WelcomeMessage";
import AppReview from "./AppReview";
import { Link, useNavigation, Outlet } from "react-router-dom";

export default function HomePage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

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
          </div>
        </div>
      </header>
      <Welcome />
      <AppReview />
    </main>
  );
}
