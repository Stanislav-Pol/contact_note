import { useRouteError } from "react-router-dom";
// Error page application

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>This is testing application</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}