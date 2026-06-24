import React from "react";
import Head from "../components/Head";
import "../styles/activity.css";

const Activity = () => {
    return (
        <>
            <Head />

            <div className="activity-container">

                <div className="activity-hero">
                    <h1>🌊 해양 생태계 보호 활동</h1>
                    <p>
                        바다는 지구 생명의 근원입니다.
                        하지만 기후 변화와 해양 오염으로 인해
                        해양 생태계는 지금 심각한 위기에 처해 있습니다.
                    </p>
                </div>

                <section className="activity-section">
                    <h2>🌍 바다가 우리 지구에 이로운 이유</h2>

                    <p>
                        바다는 지구 표면의 약 70%를 차지하며
                        인류와 모든 생명체의 생존을 지탱하는
                        거대한 생태계입니다.
                    </p>

                    <ul>
                        <li>
                            식물성 플랑크톤은 지구 산소의
                            상당 부분을 생산합니다.
                        </li>

                        <li>
                            바다는 대량의 이산화탄소를
                            흡수하여 기후 변화를 완화합니다.
                        </li>

                        <li>
                            물고기, 조개류, 새우 등
                            풍부한 식량 자원을 제공합니다.
                        </li>

                        <li>
                            해양 관광, 해운 산업,
                            수산업 등을 통해
                            막대한 경제적 가치를 창출합니다.
                        </li>

                        <li>
                            수많은 생물 종의 서식지로서
                            생물 다양성을 유지합니다.
                        </li>
                    </ul>
                </section>

                <section className="activity-section">
                    <h2>⚠️ 지금 우리 바다가 위험한 이유와 사례</h2>

                    <p>
                        인간 활동으로 인해 해양 생태계는
                        빠르게 파괴되고 있습니다.
                    </p>

                    <div className="activity-card">
                        <h3>🔥 지구온난화와 산호초 백화현상</h3>

                        <p>
                            해수 온도가 상승하면 산호가
                            공생 조류를 잃게 되면서
                            하얗게 변하는 백화현상이 발생합니다.
                        </p>

                        <p>
                            심한 경우 산호가 죽게 되며
                            산호초에 의존하는 수많은 생물이
                            서식지를 잃게 됩니다.
                        </p>
                    </div>

                    <div className="activity-card">
                        <h3>🗑️ 플라스틱 및 해양 쓰레기</h3>

                        <p>
                            매년 수천만 톤의 플라스틱 쓰레기가
                            바다로 유입되고 있습니다.
                        </p>

                        <p>
                            플라스틱은 미세플라스틱으로 분해되어
                            물고기와 해양 생물 체내에 축적됩니다.
                        </p>
                    </div>

                    <div className="activity-card">
                        <h3>🎣 남획</h3>

                        <p>
                            무분별한 어업은 특정 종의 개체 수를
                            급격히 감소시키고 먹이사슬 균형을
                            무너뜨리고 있습니다.
                        </p>
                    </div>

                    <div className="activity-card">
                        <h3>🌡️ 해양 산성화</h3>

                        <p>
                            증가한 이산화탄소가 바다에 흡수되면서
                            해양 산성화가 진행되고 있습니다.
                        </p>

                        <p>
                            조개류와 산호의 성장에
                            심각한 영향을 줍니다.
                        </p>
                    </div>
                </section>

                <section className="activity-section">
                    <h2>🚨 이 상태가 지속되면 인류에게 생기는 문제</h2>

                    <ul>
                        <li>
                            해양 생물 감소로 식량 부족 문제가
                            심화될 수 있습니다.
                        </li>

                        <li>
                            탄소 흡수 능력이 감소하여
                            기후 변화가 더욱 가속화됩니다.
                        </li>

                        <li>
                            미세플라스틱이 먹이사슬을 통해
                            인간의 몸속까지 유입됩니다.
                        </li>

                        <li>
                            수산업과 관광 산업의 붕괴로
                            경제적 피해가 발생합니다.
                        </li>

                        <li>
                            생태계 붕괴로 인해
                            복구가 불가능한 수준의
                            환경 위기가 올 수 있습니다.
                        </li>
                    </ul>
                </section>

                <section className="activity-section">
                    <h2>🌱 인류가 현재 진행 중인 해결 방안</h2>

                    <ul>
                        <li>
                            해양보호구역(MPA) 확대
                        </li>

                        <li>
                            플라스틱 사용 감축 정책 시행
                        </li>

                        <li>
                            탄소 배출 감소를 위한
                            친환경 에너지 전환
                        </li>

                        <li>
                            국제 해양 보호 협약 강화
                        </li>

                        <li>
                            해양 생태계 모니터링 및
                            연구 확대
                        </li>

                        <li>
                            해양 환경 교육 및 시민 참여 확대
                        </li>
                    </ul>
                </section>

                <section className="activity-section">
                    <h2>💙 OceanGuard가 하는 일</h2>

                    <p>
                        OceanGuard는 해양 생태계 보호를 위해
                        다양한 활동을 진행하고 있습니다.
                    </p>

                    <ul>
                        <li>
                            해양 오염 및 산호초 백화현상
                            관련 정보 제공
                        </li>

                        <li>
                            환경 보호 캠페인 홍보
                        </li>

                        <li>
                            시민 참여형 후원 시스템 운영
                        </li>

                        <li>
                            해양 보호 인식 개선 활동
                        </li>

                        <li>
                            미래 세대를 위한
                            환경 교육 콘텐츠 제공
                        </li>
                    </ul>
                </section>

            </div>
        </>
    );
};

export default Activity;