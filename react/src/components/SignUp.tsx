import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaLock, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import axiosClient from '../axios';
import AuthUser from '../hooks/AuthUser';
import { Navigate } from 'react-router-dom';
import '../styles/Register.css'
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignUp: React.FC = () => {
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    const { setUser, csrfToken } = AuthUser();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await csrfToken();
        try {
            const response = await axiosClient.post('/register', JSON.stringify({ username, email, password }));

            if (response?.status === 200) {
                setUser(response?.data?.user);
                return <Navigate to={'/dashboard'} />;
            }
            console.log(JSON.stringify(response));
        } catch (err: any) {
            console.log(err);
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
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
        setErrMsg('');
    }, [username, password, email]);

    return (
        <div className="signup-container">
            <div className="container">
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                    {errMsg}
                </p>
                <form action="/register" method="post" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="input-box username">
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            aria-invalid={validName ? 'false' : 'true'}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <FaUser className="icon" />
                        <p
                            id="uidnote"
                            className={userFocus && username.trim() !== '' && !validName ? 'instructions' : 'offscreen'}
                        >
                            <FaInfoCircle />
                            4 to 24 characters. Must begin with a letter.
                        </p>
                    </div>
                    <div className="input-box email">
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? 'false' : 'true'}
                            aria-describedby="eidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <FaEnvelope className="icon" />
                        <p
                            id="eidnote"
                            className={emailFocus && email.trim() !== '' && !validEmail ? 'instructions' : 'offscreen'}
                        >
                            <FaInfoCircle />
                            Enter a valid email
                        </p>
                    </div>
                    <div className="input-box password">
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            aria-invalid={validPassword ? 'false' : 'true'}
                            aria-describedby="pwdnote"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                            required
                        />
                        <FaLock className="icon" />
                        <p
                            id="pwdnote"
                            className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'}
                        >
                            <FaInfoCircle />
                            Must be 8-24 characters long. Must include uppercase and lowercase letters, a number and a special character.
                        </p>
                    </div>
                    <button
                        disabled={!validName || !validPassword}
                        type="submit"
                        className="btn"
                    >
                        SignUp
                    </button>
                    <div className="register-link">
                        <p>{"Already have an account? "} <a href="/login">Login</a></p>
                    </div>
                </form>

                <div className="line"></div>

                <div className="media-options">
                    <a href="#" className="field facebook">
                        <IoLogoFacebook className="facebook-icon" />
                        <span>SignUp with Facebook</span>
                    </a>
                </div>
                <div className="media-options">
                    <a href="#" className="field google">
                        <FcGoogle className="google-icon" />
                        <span>SignUp with Google</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
