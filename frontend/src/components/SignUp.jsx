import React, { useState } from "react";
import "../styles/Auth.css";
import axios from "axios";

const SignUp = () => {
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        passwordCheck: "",
    });

    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            signupData.password !==
            signupData.passwordCheck
        ) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            await axios.post(
                "http://localhost:5000/api/auth/signup",
                {
                    name: signupData.name,
                    email: signupData.email,
                    password: signupData.password,
                }
            );

            alert("회원가입 성공");

            setSignupData({
                name: "",
                email: "",
                password: "",
                passwordCheck: "",
            });
        } catch (err) {
            console.log(err);

            alert(
                err.response?.data?.message ||
                err.message ||
                "회원가입 실패"
            );
        }
    };

    return (
        <div className="auth-card">
            <h2>회원가입</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={signupData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={signupData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={signupData.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="passwordCheck"
                    placeholder="비밀번호 확인"
                    value={signupData.passwordCheck}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default SignUp;