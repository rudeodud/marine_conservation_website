import React, { useState } from "react";
import "../styles/Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                loginData
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("로그인 성공");

            navigate("/");
        } catch (err) {
            alert("이메일 또는 비밀번호를 확인해주세요.");
        }
    };

    return (
        <div className="auth-card">
            <h2>로그인</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    로그인
                </button>
            </form>
        </div>
    );
};

export default Login;