import PageContent from "../components/PageContent";

import { useRouteError, redirect } from "react-router";

export default function Error() {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found";
    message = "Could not find the resources or page";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
