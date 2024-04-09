import classes from "./AddRecipe.module.css";

import { useEffect, useRef } from "react";
import { Link, Form, useNavigation, useActionData } from "react-router-dom";

export default function AddRecipe() {
  const action = useActionData();
  console.log(action);
  const dialog = useRef();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(isSubmitting);
  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  let recipeDetails = [];

  if (action?.status === "success") {
    recipeDetails.push(action.data.recipe);
    localStorage.setItem("recipeDetails", JSON.stringify(recipeDetails));
  }

  return (
    <>
      {/* <div className={`${classes.overlay}`}></div> */}

      <dialog ref={dialog} className={`${classes.addrecipe_window}`}>
        <Link to="../">
          <button className={classes.close_btn}>&times;</button>
        </Link>
        <Form
          method="post"
          className={
            action?.status === "fail" || action?.status === "success"
              ? ""
              : classes.upload
          }
        >
          {!action && (
            <>
              <div className={classes.upload_column}>
                <h3 className={classes.recipe_data}>Recipe Data</h3>
                <label>Title</label>
                <input name="title" type="text" required />
                <label>url</label>
                <input name="source" type="text" required />
                <label>image url</label>
                <input name="url" type="text" required />
                <label>publisher</label>
                <input name="publisher" type="text" required />
                <label>prep time</label>
                <input name="preptime" type="number" required />
                <label>servings</label>
                <input name="servings" type="number" required />
              </div>
              <div className={classes.upload_column}>
                <h3 className={classes.recipe_data}>Ingredient</h3>
                <label>Ingredient1</label>
                <input
                  name="ingredient"
                  placeholder="quantity unit Add your ingredients"
                  type="text"
                  required
                />
                <label>Ingredient2</label>
                <input
                  name="ingredient"
                  placeholder="quantity unit Add your ingredients"
                  type="text"
                  required
                />
                <label>Ingredient3</label>
                <input
                  name="ingredient"
                  placeholder="quantity unit Add your ingredients"
                  type="text"
                  required
                />
                <label>Ingredient4</label>
                <input
                  name="ingredient"
                  placeholder="quantity unit Add your ingredients"
                  type="text"
                  required
                />
                <label>Ingredient5</label>
                <input
                  name="ingredient"
                  placeholder="quantity unit Add your ingredients"
                  type="text"
                  required
                />
                <label>Ingredient6</label>
                <input
                  name="ingredient"
                  placeholder="quantity unit Add your ingredients"
                  type="text"
                  required
                />
              </div>

              <button className={classes.upload_btn}>
                <svg
                  className={classes.upload_icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18.0009 16.9644C19.6966 16.7214 21 15.2629 21 13.5C21 11.567 19.433 10 17.5 10C17.2912 10 17.0867 10.0183 16.8887 10.054C16.9616 9.7142 17 9.36158 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 9.36158 7.03838 9.7142 7.11205 10.0533C6.91331 10.0183 6.70879 10 6.5 10C4.567 10 3 11.567 3 13.5C3 15.2003 4.21241 16.6174 5.81986 16.934L6.00005 16.9646L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path>
                </svg>
                <span>{isSubmitting ? "uploading" : "upload"}</span>
              </button>
            </>
          )}

          {action && action.status === "fail" && (
            <div className={classes.failed_screen}>
              <h2 className={classes.failed_header}>Failed to add recipe</h2>
              <p className={classes.failed_message}>{action.message}</p>
            </div>
          )}

          {action?.status === "success" && (
            <div className={classes.success_message}>
              <p>Recipe Added Successfully</p>
              <Link to={`../${action.data.recipe.id}`}>
                <button>View</button>
              </Link>
            </div>
          )}
        </Form>
      </dialog>
    </>
  );
}

export async function action({ request }) {
  const key = "390e26e0-a6e9-4131-8ab6-3e90723a5d39";
  const formData = await request.formData();

  const ingredient = formData.getAll("ingredient");
  const ingredients = Object.entries(ingredient).map((ing) => {
    const [quantity, unit, description] = ing[1].replaceAll(" ", "").split(",");
    return { quantity: quantity ? +quantity : null, unit, description };
  });
  const recipeDetails = {
    title: formData.get("title"),
    image_url: formData.get("url"),
    source_url: formData.get("source"),
    publisher: formData.get("publisher"),
    servings: formData.get("servings"),
    cooking_time: formData.get("preptime"),
    ingredients,
  };

  console.log(recipeDetails);

  const sendData = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?key=${key}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipeDetails),
    }
  );

  const response = await sendData.json();

  return response;
}
