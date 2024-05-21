import { Suspense } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import App from "./App";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ErrorPage from "./error-page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Board from "./components/App/Board";
import { AuthProvider } from "./providers/AuthProvider";
import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import { StyleSheetManager } from "styled-components";
import { createRoot } from "react-dom/client";
import { About } from "./components/App/About";
import PasswordForgot from "./components/Auth/PasswordForgot";
import Home from "./components/App/Home";
import Projects from "./components/App/Projects";
import Analytics, { Teams } from "./components/App/Teams";
import Notifications from "./components/App/Notifications";
import FAQs from "./components/App/FAQs";
import Settings from "./components/App/Settings";
import { NavigationProvider } from "./providers/NavigationProvider";
import { Share } from "./components/App/Share";
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
                path: "/board",
                element: <Board />,
            },
            {
                path: "/share",
                element: <Share />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/teams",
                element: <Teams/>,
            },
            {
                path: "/notifications",
                element: <Notifications />,
            },
            {
                path: "/faqs",
                element: <FAQs />,
            },
            {
                path: "/settings",
                element: <Settings />,
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
    <Suspense fallback={<div>Loading...</div>}>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
            <NavigationProvider>
                <AuthProvider>
                    {shouldDisplayNavbar && <Navbar isDashboard={false} />}
                    <RouterProvider router={router} />
                </AuthProvider>
            </NavigationProvider>
        </StyleSheetManager>
    </Suspense>,
);


