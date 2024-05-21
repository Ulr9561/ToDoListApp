import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import AuthUser from "../../hooks/AuthUser";
import axiosClient from "../../axios";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { CheckCircleOutline } from "@mui/icons-material";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

export default function SignUp() {
	const userRef = useRef<HTMLInputElement>(null);
	const errRef = useRef<HTMLParagraphElement>(null);

	const [username, setUsername] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");

	const { setUser, csrfToken } = AuthUser();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await axiosClient.post(
				"/register",
				JSON.stringify({ username, email, password }),
			);

			if (response?.status === 200) {
				setUser(response?.data?.user);
				console.log(response?.data?.user);
				return <Navigate to={"/home"} />;
			}
			console.log(JSON.stringify(response));
		} catch (err: any) {
			console.log(err);
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 409) {
				setErrMsg("Username Taken");
			} else {
				setErrMsg("Registration Failed");
			}
			if (errRef.current) errRef.current.focus();
		}
	};

	useEffect(() => {
		if (userRef.current) userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(username);
		setValidName(result);
	}, [username]);

	useEffect(() => {
		const result = PWD_REGEX.test(password);
		setValidPassword(result);
	}, [password]);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		setValidEmail(result);
	}, [email]);

	useEffect(() => {
		setErrMsg("");
	}, [username, password, email]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container
				component="main"
				maxWidth="xs"
				className="mt-[30px] border-[2px] p-[18px] pb-[40px] rounded-md"
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
						Sign up
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
									onChange={(e) => setEmail(e.target.value)}
									aria-invalid={validEmail ? "false" : "true"}
									aria-describedby="eidnote"
									onFocus={() => setEmailFocus(true)}
									onBlur={() => setEmailFocus(false)}
									required
									fullWidth
									name="email"
									label="Email"
									type="email"
									id="email"
									autoComplete="email"
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
											emailFocus &&
											email.trim() !== "" &&
											!validEmail
												? "flex"
												: "none",
									}}
									severity="warning"
								>
									Enter a valid email
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
									type="password"
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
											passwordFocus && !validPassword && password.trim() !== ""
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
							style={{ backgroundColor: "orange" }}
							type="submit"
							fullWidth
							variant="contained"
							sx={{
								mt: 3,
								mb: 2,
							}}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link
									href="/login"
									style={{ color: "orange" }}
									variant="body2"
									sx={{ textDecoration: "none" }}
									className="hover:underline"
								>
									Already have an account? Sign in
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
