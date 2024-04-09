import HomePage from "./components/HomePage";

import SearchPage, { action as searchActions } from "./pages/searchResult";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddRecipe, {
  action as addRecipeActionData,
} from "./components/AddRecipe";
import Error from "./pages/Error";
import ViewRecipe, { loader as loadRecipe } from "./pages/ViewRecipePage";
import RecipeDetails from "./components/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/search",
    element: <SearchPage />,
    errorElement: <Error />,
    action: searchActions,
    children: [
      {
        path: "addrecipe",
        element: <AddRecipe />,
        action: addRecipeActionData,
      },
    ],
  },
  {
    path: "/search/:eventid",
    element: <ViewRecipe />,
    loader: loadRecipe,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
