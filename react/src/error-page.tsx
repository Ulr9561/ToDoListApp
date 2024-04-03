import React from 'react';
import { useRouteError } from 'react-router-dom';

interface CustomError extends Error {
  statusText?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as CustomError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
