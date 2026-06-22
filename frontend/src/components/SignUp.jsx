import React from "react";
import "../styles/Auth.css";

const SignUp = () => {
    return (
        <div className="auth-card">

            <h2>회원가입</h2>

            <form>

                <input
                    type="text"
                    placeholder="이름"
                />

                <input
                    type="email"
                    placeholder="이메일"
                />

                <input
                    type="password"
                    placeholder="비밀번호"
                />

                <input
                    type="password"
                    placeholder="비밀번호 확인"
                />

                <button type="submit">
                    회원가입
                </button>

            </form>

        </div>
    );
};

export default SignUp;