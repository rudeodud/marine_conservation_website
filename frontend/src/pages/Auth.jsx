import React from "react";
import "../styles/Auth.css";
import Head from "../components/Head.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "../components/Login.jsx";
import SignUp from "../components/SignUp.jsx";

const Auth = () => {
    return (
        <div>
            <Head />
            <Login />
        </div>
    );
};

export default Auth;