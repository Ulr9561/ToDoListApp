/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import AuthUser from "../hooks/AuthUser";
import axiosClient from "../axios";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const handleLogout = async (): Promise<void> => {
	try {
		const resp = await axiosClient.post("/logout");
		if (resp.status === 200) {
			localStorage.removeItem("user");
			window.location.href = "/";
		}
	} catch (error) {
		console.log(error);
	}
};

const DefaultLayout: React.FC = () => {
	const navigate = useNavigate();
	const { user, setUser } = AuthUser();
	const [err, setErr] = useState<string>("");

	useEffect(() => {
		document.body.classList.add("my-page-body-class");

		return () => {
			document.body.classList.remove("my-page-body-class");
		};
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosClient.get("/user");
				if (response.status === 200) {
					console.log(response);
					setUser(response?.data?.data);
				}
			} catch (err: any) {
				if (err.response?.status === 401) {
					localStorage.removeItem("user");
					console.log(err);
					console.log(err?.response?.data?.message);
					setErr(err?.response?.data?.message);
					navigate("/login");
				}
			}
		};

		fetchData();
	}, []);

	if (!user) {
		return <Navigate to="/login" />;
	}
	return (
        <div className="w-screen h-screen relative">
			<Navbar />
			<Sidebar />
			<div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default DefaultLayout;
