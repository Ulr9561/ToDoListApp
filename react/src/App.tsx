import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthUser from "./hooks/AuthUser";

const App: React.FC = () => {
	const { user } = AuthUser();

	return (
		<div className="App">
			<div className="left-side">
				<h1>TO-DO List App</h1>
				<p>
					Enjoy this todolistApp for make your own to-do list with React.
					<br />
					This app is entirely made with React and Laravel
				</p>
				<a href="/login">
					<button className="startedButton" role="button">
						Get Started
					</button>
				</a>
			</div>
		</div>
	);
};

export default App;
