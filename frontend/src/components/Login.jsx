import React from "react";
import '../styles/Auth.css'

const Login = () => {
    return (
        <div className="login-card">
            <h2>로그인</h2>
            <form>
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;