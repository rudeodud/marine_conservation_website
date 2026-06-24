import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Head from "../components/Head";

const Donation = () => {
    const navigate = useNavigate();

    const [amount, setAmount] = useState("");

    const handleSubmit = async () => {
        const user = JSON.parse(
            localStorage.getItem("user")
        );

        if (!user) {
            alert("로그인 후 이용해주세요.");
            navigate("/auth");
            return;
        }

        if (!amount || Number(amount) <= 0) {
            alert("후원 금액을 입력해주세요.");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:5000/api/donations",
                {
                    userId: user.id,
                    donorName: user.name,
                    amount: Number(amount),
                }
            );

            if (res.data.success) {
                alert("후원이 완료되었습니다.");

                navigate("/boost");
            }
        } catch (error) {
            console.error(error);

            alert("후원 처리 중 오류가 발생했습니다.");
        }
    };

    return (
        <>
            <Head />

            <div
                style={{
                    maxWidth: "600px",
                    margin: "50px auto",
                    padding: "30px",
                    background: "#ffffff",
                    borderRadius: "12px",
                    boxShadow:
                        "0 5px 20px rgba(0,0,0,0.1)",
                }}
            >
                <h2>후원하기</h2>

                <p>
                    OceanGuard의 해양 보호 활동에
                    함께해주세요.
                </p>

                <input
                    type="number"
                    placeholder="후원 금액 입력"
                    value={amount}
                    onChange={(e) =>
                        setAmount(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "20px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                    }}
                />

                <button
                    onClick={handleSubmit}
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        padding: "12px",
                        background: "#0077b6",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                    }}
                >
                    후원하기
                </button>
            </div>
        </>
    );
};

export default Donation;