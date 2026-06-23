import React from "react";
import "../styles/Head.css";
import { useNavigate } from "react-router-dom";

const Head = () => {
    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("로그아웃 되었습니다.");

        navigate("/");
        window.location.reload();
    };

    return (
        <header>
            <div className="Head-wrapper">
                <div className="Head-logo">
                    <h1
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer" }}
                    >
                        OceanGuard
                    </h1>
                </div>

                <div className="Head-menu">
                    <div
                        className="Head-menu-item"
                        onClick={() => navigate("/")}
                    >
                        홈
                    </div>

                    <div
                        className="Head-menu-item"
                        onClick={() => navigate("/activity")}
                    >
                        활동
                    </div>

                    <div
                        className="Head-menu-item"
                        onClick={() => navigate("/news")}
                    >
                        뉴스
                    </div>

                    <div
                        className="Head-menu-item"
                        onClick={() => navigate("/support")}
                    >
                        고객지원
                    </div>
                </div>

                <div className="Head-auth">
                    {user ? (
                        <>
                            <span
                                style={{
                                    marginRight: "10px",
                                    fontWeight: "600",
                                }}
                            >
                                {user.name}님
                            </span>

                            <div
                                className="Head-auth-login"
                                onClick={handleLogout}
                            >
                                로그아웃
                            </div>
                        </>
                    ) : (
                        <div
                            className="Head-auth-login"
                            onClick={() =>
                                navigate("/Auth")
                            }
                        >
                            로그인
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Head;