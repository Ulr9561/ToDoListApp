import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./components/App/Home";

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
				path: "/register",
				element: <SignUp />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/login",
				element: <Login />,
				errorElement: <ErrorPage />,
			},
		],
	},
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '/home',
				element: <Home />,
			}
		]
	}
]);

export default router;
