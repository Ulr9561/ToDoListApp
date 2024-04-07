import { Suspense } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ErrorPage from "./error-page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./providers/AuthProvider";
import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import { StyleSheetManager } from "styled-components";
import { createRoot } from "react-dom/client";
import { About } from "./components/About";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PasswordForgot from "./components/Auth/PasswordForgot";
import Home from "./components/Home";
const shouldDisplayNavbar = window.location.pathname === "/";

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
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <SignUp />,
            },
            {
                path: "/password-forgot",
                element: <PasswordForgot />,
            },
        ],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: '/home',
                element:<Home />,
            },
        ],
    },
    {
        path: "/errorpage",
        element: <ErrorPage />,
    },
]);

export { router };

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
    <GoogleOAuthProvider clientId="350156108261-u3l4khlhpb1gk39jj4ouc1di2htnhp16.apps.googleusercontent.com">
        <Suspense fallback={<div>Loading...</div>}>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
                <AuthProvider>
                    {shouldDisplayNavbar && <Navbar isDashboard={false} />}
                    <RouterProvider router={router} />
                </AuthProvider>
            </StyleSheetManager>
        </Suspense>
    </GoogleOAuthProvider>,
);
