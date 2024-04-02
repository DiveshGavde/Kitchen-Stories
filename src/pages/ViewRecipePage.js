import ViewIngredient from "../components/viewIngredient";

import { useLoaderData } from "react-router-dom";

export default function ViewRecipe() {
  const data = useLoaderData();

  return (
    <>
      <ViewIngredient recipeDetails={data} />
    </>
  );
}

export async function action({ params }) {
  const id = params.eventid;

  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const { data } = await response.json();
  const recipeItems = {
    cookingTime: data.recipe.cooking_time,
    id: data.recipe.id,
    image: data.recipe.image_url,
    ingredients: data.recipe.ingredients,
    publisher: data.recipe.publisher,
    servings: data.recipe.servings,
    title: data.recipe.title,
    bookmark: "",
  };

  return recipeItems;
}

export const state = {
  bookmarks: [],
};
