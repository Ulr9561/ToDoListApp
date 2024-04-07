import React, { useEffect, useRef, useState } from "react";
import "../../styles/Login.css";
import axiosClient from "../../axios";
import { axiosCl } from "../../axios";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PasswordForgot: React.FC = () => {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const errRef = useRef<HTMLParagraphElement>(null);
    const [errMsg, setErrMsg] = useState("");
    const [message, setMessage] = useState("");

    function generateOTP() {
        // Declare a digits variable
        // which stores all digits
        let digits = "0123456789";
        let OTP = "";
        let len = digits.length;
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * len)];
        }
        return OTP;
    } 


    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            const response = await axiosCl.post(
                "/checkemail",
                JSON.stringify({ email }),
            );
            if (response.status === 200) {
                const code = generateOTP();
                console.log(code)
                try {
                    const response = await axiosClient.post(
                        "/sendMail",
                        JSON.stringify({ email, code }),
                    );
                    if (response.status === 200) {
                        setMessage("emailsent ok");
                    }
                } catch (err: any) {
                    
                }
            }
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err?.response.status === 404) {
                setErrMsg("Email not found");
            } else {
                setErrMsg("Service is unavailable. Please try again later")
            }
        }
    };
    return (
        <div className="login-container content-center">
            <div className="container">
                {message === "emailsent ok" ? (
                    <>
                        
                    </>
                ) : (
                      <>
                        <p
                            ref={errRef}
                            className={
                                emailFocus && email.trim() !== "" && !validEmail || errMsg
                                    ? "errmsg"
                                    : "offscreen"
                            }
                            aria-live="assertive"
                        >
                            {errMsg || "Enter valid email"}
                        </p>
                        
                        <h1 className="font-medium text-sm text-nowrap py-6">
                            Password Recovery
                        </h1>

                        <p className="py-6 text-gray-400 text-center">
                            We will sent you a verification code to reset your
                            password. <br />
                            Please enter your email
                        </p>
                        <div className="input-box email bottom-[10px] my-5">
                            <input
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                aria-invalid={validEmail ? "false" : "true"}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                autoComplete="off"
                                required
                                aria-describedby="eidnote"
                            />
                        </div>
                        <button
                            disabled={!validEmail}
                            className="w-full h-[50px] rounded-2xl bg-gray-800 text-white my-[20px]"
                            onClick={handleSubmit}
                        >

                            Send Email
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default PasswordForgot;
