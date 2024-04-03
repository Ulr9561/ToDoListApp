import React, { Suspense } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import App from "./App";
import Login from "./components/Login";
import SignUp from './components/SignUp';
import ErrorPage from './error-page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './providers/AuthProvider';
import GuestLayout from './layouts/GuestLayout';
import DefaultLayout from './layouts/DefaultLayout';
import { StyleSheetManager } from 'styled-components';
import { createRoot } from 'react-dom/client';
const shouldDisplayNavbar = window.location.pathname === '/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <SignUp />,
      },
    ]
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ]
  },
  {
    path: '/errorpage',
    element: <ErrorPage />,
  }
]);

export { router };

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
        <AuthProvider>
          {shouldDisplayNavbar && <Navbar isDashboard={false}/>}
          <RouterProvider router={router} />
        </AuthProvider>
      </StyleSheetManager>
    </Suspense>
  </React.StrictMode>
);
