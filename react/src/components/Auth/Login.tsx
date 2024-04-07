import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaLock, FaInfoCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Navigate } from "react-router-dom";
import AuthUser from "../../hooks/AuthUser";
import axiosClient from "../../axios";
import '../../styles/Login.css';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login: React.FC = () => {
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [username, setUsername] = useState<string>("");
    const [validName, setValidName] = useState<boolean>(false);
    const [userFocus, setUserFocus] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
     const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const [errMsg, setErrMsg] = useState<string>("");
    const { setUser, csrfToken } = AuthUser();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post(
                "/login",
                JSON.stringify({ username, password }),
            );
            console.log(JSON.stringify(response?.data));
            if (response.status === 200) {
                setUser(response?.data?.user);

                return <Navigate to={"/dashboard"} />;
            }
        } catch (err: any) {
            console.log(err);
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else if (err.response?.status === 422) {
                setErrMsg("Username or password is incorrect");
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
        <div className="login-container">
            <div className="container fixed mt-[-1.3%]">
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box username">
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <FaUser className="icon" />
                        <p
                            id="uidnote"
                            className={
                                userFocus &&
                                username.trim() !== "" &&
                                !validName
                                    ? "instructions"
                                    : "offscreen"
                            }
                        >
                            <FaInfoCircle />4 to 24 characters. Must begin with
                            a letter.
                        </p>
                    </div>
                    <div className="input-box password">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                            required
                        />
                        <div
                            className="icon cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                        <p
                            id="pwdnote"
                            className={
                                passwordFocus && !validPassword
                                    ? "instructions"
                                    : "offscreen"
                            }
                        >
                            <FaInfoCircle />
                            Must be 8-24 characters long. Must include uppercase
                            and lowercase letters, a number and a special
                            character.
                        </p>
                    </div>
                    <div className="remember-forgot">
                        <label htmlFor="remember-me">
                            <input type="checkbox" id="remember-me" />
                            Remember me
                        </label>
                        <a href="/password-forgot">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        disabled={!validName || !validPassword}
                    >
                        Login
                    </button>
                    <div className="register-link">
                        <p>
                            {"Don't have an account? "}{" "}
                            <a href="/register">Register</a>
                        </p>
                    </div>
                </form>

                <div className="line"></div>

                <div className="media-options facebook">
                    <a href="#" className="field facebook hover:bg-sky-600">
                        <IoLogoFacebook className="facebook-icon" />
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div className="media-options google">
                    <a href="#" className="field google hover:bg-stone-900">
                        <FcGoogle className="google-icon" />
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
