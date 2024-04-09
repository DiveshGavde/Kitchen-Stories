import Search from "../components/Searchpanel";
import { useActionData, json, Outlet } from "react-router-dom";

export default function SearchPage() {
  const data = useActionData();

  return (
    <>
      <Search recipes={data} />
      <Outlet />
    </>
  );
}

export async function action({ request, params }) {
  const state = {
    recipes: [],
    page: 1,
    maxRecipesPerPage: 12,
  };

  const formData = await request.formData();
  const inputValue = formData.get("search");
  const recipeList = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}`
  );
  const response = await recipeList.json();

  if (!recipeList.ok) {
    throw json(
      {
        message:
          "We could not find any matching results,let's try something new",
      },
      { status: 500 }
    );
  }
  const results = response.data.recipes;

  const result = results.map((results) => {
    return {
      publisher: results.publisher,
      image: results.image_url,
      title: results.title,
      id: results.id,
    };
  });

  return {
    results,
    result,
    state,
  };
}

// 55ce6c2e-2047-4af6-b210-dfc1466162e7
