import { Form, useActionData, useNavigation, Link } from "react-router-dom";
import { useState } from "react";

import Spinner from "./spinner";
import RecipeDetails from "./RecipeDetails";
import classes from "./searchpanel.module.css";
import Bookmark from "./Bookmark";
export default function Search({ recipes }) {
  const data = useActionData();
  const [displayRecipe, setDisplayRecipe] = useState(true);

  let displayRecipesOnPage;
  let start;
  let end;

  if (data) {
    start = (data.state.page - 1) * data.state.maxRecipesPerPage;
    end = data.state.page * data.state.maxRecipesPerPage;
    displayRecipesOnPage = data.result.slice(start, end);
  }

  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  function increaseOnClick(e) {
    e.preventDefault();
    data.state.page += 1;
    setDisplayRecipe((toggle) => !toggle);
    console.log(data.state.page);
  }

  function decrement(e) {
    e.preventDefault();
    data.state.page -= 1;
    setDisplayRecipe((toggle) => !toggle);
  }
  return (
    <section className="section">
      <div className={`${classes.container} ${classes.searchheader}`}>
        <div className="branding">
          <svg
            className={classes.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path>
          </svg>
          <h2>Kitchen Stories</h2>
        </div>
        <Form method="post" action="/search" className={classes.search}>
          <input
            name="search"
            type="text"
            placeholder="Search over 10000+ recipes"
          />
          <button>Search</button>
        </Form>

        <div>
          <ul className={classes.userchoices}>
            {/* <li>
              <button>
                <Link to="addrecipe" className={classes.link}>
                  <svg
                    className={classes.listicon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 1V4H1V6H4V9H6V6H9V4H6V1H4ZM3 20.0066V11H5V19H13V14C13 13.45 13.45 13 14 13L19 12.999V5H11V3H20.0066C20.5552 3 21 3.45576 21 4.00247V15L15 20.996L4.00221 21C3.4487 21 3 20.5551 3 20.0066ZM18.171 14.999L15 15V18.169L18.171 14.999Z"></path>
                  </svg>
                </Link>
              </button>

              <span>Add Recipe</span>
            </li> */}
            {/* <li>
              <button>
                <svg
                  className={classes.listicon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
                </svg>
              </button>

              <span>Bookmarks</span>
              <Bookmark />
            </li> */}
          </ul>
        </div>
      </div>

      <div className={classes.recipe}>
        {!recipes && !isLoading && (
          <div className={classes.message}>
            <svg
              className={classes.smile}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 13H9C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13H17C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path>
            </svg>
            <p>Start searching for a recipe you like to cook,Have fun</p>
          </div>
        )}

        {isLoading && <Spinner />}
        {recipes && <RecipeDetails loadedRecipe={displayRecipesOnPage} />}
        <div
          className={
            data?.state.page > 1 ? classes.buttons : classes.style_button
          }
        >
          {data && data.state.page > 1 && (
            <button onClick={decrement} className={classes.pages_button}>
              <svg
                className={`${classes.smile} ${classes.arrow}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
              <span>page {data.state.page - 1}</span>
            </button>
          )}

          {data && (
            <button
              onClick={increaseOnClick}
              disabled={displayRecipesOnPage.length < 12}
              className={classes.pages_button}
            >
              <span>page {data.state.page}</span>
              <svg
                className={`${classes.smile} ${classes.arrow}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
