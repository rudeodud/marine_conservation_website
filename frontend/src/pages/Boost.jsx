import React from "react";
import "../styles/Boost.css";
import Head from "../components/Head";

const Boost = () => {
    const donationData = {
        totalDonation: 12500000,
        usedDonation: 4200000,
        myDonation: 350000,
    };

    return (
        <div className="boost-container">
            <Head />

            <div className="boost-content">
                <div className="boost-header">
                    <div>
                        <h1>🌊 OceanGuard 후원 현황</h1>
                        <p>
                            바다를 지키기 위한 후원금 사용 내역을
                            투명하게 공개합니다.
                        </p>
                    </div>

                    <button className="boost-btn">
                        후원하기
                    </button>
                </div>

                <div className="stats-grid">
                    <Card
                        title="🌊 이번 달 총 모금액"
                        value={`₩${donationData.totalDonation.toLocaleString()}`}
                    />

                    <Card
                        title="💰 이번 달 사용 금액"
                        value={`₩${donationData.usedDonation.toLocaleString()}`}
                    />

                    <Card
                        title="❤️ 내가 후원한 금액"
                        value={`₩${donationData.myDonation.toLocaleString()}`}
                    />
                </div>

                <div className="boost-table-container">
                    <h2>후원금 사용 내역</h2>

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
                                <td>해양 정화 활동</td>
                                <td>해변 쓰레기 수거 캠페인</td>
                                <td>₩1,500,000</td>
                                <td>2026-06-03</td>
                            </tr>

                            <tr>
                                <td>환경 교육</td>
                                <td>청소년 해양 환경 교육</td>
                                <td>₩800,000</td>
                                <td>2026-06-10</td>
                            </tr>

                            <tr>
                                <td>보호 장비 구매</td>
                                <td>정화 활동 장비 구입</td>
                                <td>₩1,900,000</td>
                                <td>2026-06-17</td>
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