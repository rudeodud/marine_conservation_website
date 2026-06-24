import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Boost.css";
import Head from "../components/Head";

const Boost = () => {
    const navigate = useNavigate();

    const [donationData, setDonationData] = useState({
        totalDonation: 0,
        usedDonation: 4200000,
        myDonation: 0,
    });

    useEffect(() => {
        const user = JSON.parse(
            localStorage.getItem("user")
        );

        console.log("user =", user);

        if (!user) {
            return;
        }

        fetch(
            `http://localhost:5000/api/donations/stats/${user.id}`
        )
            .then((res) => res.json())
            .then((data) => {

                console.log("stats =", data);

                if (data.success) {
                    setDonationData({
                        totalDonation: Number(
                            data.totalDonation
                        ),

                        usedDonation: 4200000,

                        myDonation: Number(
                            data.myDonation
                        ),
                    });
                }
            })
            .catch((error) => {
                console.error(
                    "후원 통계 조회 실패:",
                    error
                );
            });
    }, []);

    return (
        <div className="boost-container">
            <Head />

            <div className="boost-content">

                <div className="boost-header">
                    <div>
                        <h1>
                            🌊 OceanGuard 후원 현황
                        </h1>

                        <p>
                            바다를 지키기 위한
                            후원금 사용 내역을
                            투명하게 공개합니다.
                        </p>
                    </div>

                    <button
                        className="boost-btn"
                        onClick={() =>
                            navigate("/donation")
                        }
                    >
                        후원하기
                    </button>
                </div>

                <div className="stats-grid">

                    <Card
                        title="🌊 총 모금액"
                        value={`₩${donationData.totalDonation.toLocaleString()}`}
                    />

                    <Card
                        title="💰 사용 금액"
                        value={`₩${donationData.usedDonation.toLocaleString()}`}
                    />

                    <Card
                        title="❤️ 내가 후원한 금액"
                        value={`₩${donationData.myDonation.toLocaleString()}`}
                    />

                </div>

                <div className="boost-table-container">

                    <h2>
                        후원금 사용 내역
                    </h2>

                    <table className="boost-table">

                        <thead>
                            <tr>
                                <th>사용처</th>
                                <th>내용</th>
                                <th>금액</th>
                                <th>날짜</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    해양 정화 활동
                                </td>
                                <td>
                                    해변 쓰레기 수거 캠페인
                                </td>
                                <td>
                                    ₩1,500,000
                                </td>
                                <td>
                                    2026-06-03
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    환경 교육
                                </td>
                                <td>
                                    청소년 해양 환경 교육
                                </td>
                                <td>
                                    ₩800,000
                                </td>
                                <td>
                                    2026-06-10
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    보호 장비 구매
                                </td>
                                <td>
                                    정화 활동 장비 구입
                                </td>
                                <td>
                                    ₩1,900,000
                                </td>
                                <td>
                                    2026-06-17
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
};

const Card = ({ title, value }) => {
    return (
        <div className="stat-card">
            <p>{title}</p>
            <h2>{value}</h2>
        </div>
    );
};

export default Boost;