import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { CheckCircleOutline } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import AuthUser from "../../hooks/AuthUser";
import axiosClient from "../../axios";
import { Alert } from "@mui/material";
import { Navigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
	const userRef = useRef<HTMLInputElement>(null);
	const errRef = useRef<HTMLParagraphElement>(null);

	const [username, setUsername] = useState<string>("");
	const [validName, setValidName] = useState<boolean>(false);
	const [userFocus, setUserFocus] = useState<boolean>(false);

	const [password, setPassword] = useState<string>("");
	const [validPassword, setValidPassword] = useState<boolean>(false);
	const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState(false);

	const [errMsg, setErrMsg] = useState<string>("");
	const { setUser, user } = AuthUser();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await axiosClient.post(
				"/login",
				JSON.stringify({ username, password }),
			);
			console.log(JSON.stringify(response?.data));
			if (response.status === 200) {
				setUser(response?.data?.user);
				console.log(user);
				return <Navigate to={"/home"} />;
			}
		} catch (err: any) {
			if (err?.response) {
				setErrMsg("No Server Response");
				console.log(errMsg);
			} else if (err.response?.status === 400) {
				setErrMsg("Missing Username or Password");
			} else if (err.response?.status === 401) {
				setErrMsg("Unauthorized");
			} else if (err.response?.status === 422) {
				setErrMsg("Unexisted User please review credentials");
			} else {
				setErrMsg("Login Failed");
			}
			// Focus sur l'élément d'erreur
			if (errRef.current) errRef.current.focus();
		}
	};

	useEffect(() => {
		if (userRef.current) userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(username);
		console.log(result);
		console.log(username);
		setValidName(result);
	}, [username]);

	useEffect(() => {
		const result = PWD_REGEX.test(password);
		console.log(result);
		console.log(password);
		setValidPassword(result);
	}, [password]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container
				component="main"
				maxWidth="xs"
				className="border-[2px] p-[18px] pb-[80px] rounded-md"
			>
				<CssBaseline />
				<Alert
					ref={errRef}
					sx={{ display: errMsg ? "flex" : "none" }}
					icon={<CheckCircleOutline fontSize="inherit" />}
					severity="error"
				>
					{errMsg}
				</Alert>
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "orange" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									ref={userRef}
									fullWidth
									id="firstName"
									onChange={(e) => setUsername(e.target.value)}
									label="Username"
									autoFocus
									onFocus={() => setUserFocus(true)}
									onBlur={() => setUserFocus(false)}
								/>
								<Alert
									id="uidnote"
									icon={
										<WarningAmberOutlinedIcon
											fontSize="inherit"
											sx={{ color: "white" }}
										/>
									}
									sx={{
										marginTop: "5px",
										backgroundColor: "red",
										color: "white",
										display:
											userFocus &&
											username.trim() !== "" &&
											!validName
												? "flex"
												: "none",
									}}
									severity="warning"
								>
									4 to 24 characters. Must begin with a letter.
								</Alert>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									aria-invalid={validPassword ? "false" : "true"}
									aria-describedby="pwdnote"
									type={showPassword ? "text" : "password"}
									id="password"
									onChange={(e) => setPassword(e.target.value)}
									onFocus={() => setPasswordFocus(true)}
									onBlur={() => setPasswordFocus(false)}
									autoComplete="new-password"
								/>
								<Alert
									icon={
										<WarningAmberOutlinedIcon
											fontSize="inherit"
											sx={{ color: "white" }}
										/>
									}
									sx={{
										marginTop: "5px",
										backgroundColor: "red",
										color: "white",
										display:
											passwordFocus && !validPassword
												? "flex"
												: "none",
									}}
									severity="warning"
								>
									Must be 8-24 characters long. Must include uppercase
									and lowercase letters, a number and a special
									character.
								</Alert>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											value="allowExtraEmails"
											color="primary"
										/>
									}
									label="I want to receive inspiration, marketing promotions and updates via email."
								/>
							</Grid>
						</Grid>
						<Button
							disabled={!validName || !validPassword}
							style={{ backgroundColor: "orange" }}
							type="submit"
							fullWidth
							variant="contained"
							sx={{
								mt: 3,
								mb: 2,
							}}
						>
							Login
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link
									href="/register"
									style={{ color: "orange" }}
									variant="body2"
									sx={{ textDecoration: "none" }}
									className="hover:underline"
								>
									Doesn't have an account ? Sign up
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}
