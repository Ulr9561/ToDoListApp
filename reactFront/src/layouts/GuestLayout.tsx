import React from "react";
import AuthUser from "../hooks/AuthUser";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout: React.FC = () => {
	const { user } = AuthUser();

	if (user) {
		return <Navigate to={"/home"} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
};

export default GuestLayout;
