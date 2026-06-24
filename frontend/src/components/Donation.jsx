import React, { useState } from "react";
import Head from "../components/Head";

const Donation = () => {
    const [amount, setAmount] = useState("");

    const handleDonate = async () => {
        const user = JSON.parse(
            localStorage.getItem("user")
        );

        if (!user) {
            alert("로그인이 필요합니다.");
            return;
        }

        const response = await fetch(
            "http://localhost:5000/api/donations",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    userId: user.id,
                    amount: Number(amount),
                }),
            }
        );

        const data =
            await response.json();

        if (data.success) {
            alert("후원 감사합니다.");
            setAmount("");
        } else {
            alert(data.message);
        }
    };

    return (
        <>
            <Head />

            <div
                style={{
                    marginTop: "120px",
                    textAlign: "center",
                }}
            >
                <h1>🌊 후원하기</h1>

                <input
                    type="number"
                    max="999999999"
                    placeholder="후원 금액"
                    value={amount}
                    onChange={(e) =>
                        setAmount(
                            e.target.value
                        )
                    }
                />

                <button
                    onClick={handleDonate}
                >
                    후원하기
                </button>
            </div>
        </>
    );
};

export default Donation;