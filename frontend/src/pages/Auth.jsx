import React, { useState } from "react";
import "../styles/Auth.css";

import Head from "../components/Head";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <Head />

            <div className="auth-container">

                <div className="auth-tabs">
                    <button
                        className={isLogin ? "active" : ""}
                        onClick={() => setIsLogin(true)}
                    >
                        로그인
                    </button>

                    <button
                        className={!isLogin ? "active" : ""}
                        onClick={() => setIsLogin(false)}
                    >
                        회원가입
                    </button>
                </div>

                {isLogin ? <Login /> : <SignUp />}

            </div>
        </>
    );
};

export default Auth;