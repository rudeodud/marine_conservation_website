import React from "react";
import "../styles/Weare.css";

const Weare = () => {
    return (
        <section className="weare">
            <div className="weare-container">
                <div className="weare-header">
                    <h2>🌊 우리는 OceanGuard입니다</h2>

                    <p>
                        OceanGuard는 해양 생태계 보호와 환경 보전을
                        목표로 하는 비영리 환경 보호 단체입니다.
                    </p>
                </div>

                <div className="weare-grid">
                    <div className="weare-card">
                        <h3>🪸 산호초 보호</h3>

                        <p>
                            지구온난화로 인해 발생하는 산호초
                            백화현상의 심각성을 알리고 보호 활동을
                            지원합니다.
                        </p>
                    </div>

                    <div className="weare-card">
                        <h3>♻️ 해양 쓰레기 감소</h3>

                        <p>
                            플라스틱 쓰레기로 오염되는 바다 환경을
                            개선하기 위한 정화 활동과 캠페인을
                            진행합니다.
                        </p>
                    </div>

                    <div className="weare-card">
                        <h3>📚 환경 교육</h3>

                        <p>
                            미래 세대를 위한 해양 환경 교육과 다양한
                            홍보 활동을 통해 환경 의식을 높입니다.
                        </p>
                    </div>
                </div>

                <div className="weare-bottom">
                    <h3>💙 우리의 목표</h3>

                    <p>
                        더 깨끗한 바다와 건강한 해양 생태계를 위해
                        사람들에게 환경 문제를 알리고, 누구나 쉽게
                        환경 보호 활동에 참여할 수 있도록 돕습니다.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Weare;