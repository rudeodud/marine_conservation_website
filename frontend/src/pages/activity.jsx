import React from "react";
import Head from "../components/Head";
import "../styles/activity.css";

const Activity = () => {
    return (
        <>
            <Head />

            <div className="activity-container">

                {/* HERO */}
                <section className="hero-image">
                    <div className="hero-overlay">
                        <h1>
                            🌊 Protect Our Ocean
                        </h1>
                        <p>
                            바다는 단순한 물의 공간이 아니라
                            지구 생명과 인류의 미래를 유지하는 거대한 생태 시스템입니다.
                        </p>
                    </div>
                </section>

                {/* 바다가 좋은 이유 */}
                <section className="activity-section">
                    <h2>
                        🌍 바다가 우리 지구에 이로운 이유
                    </h2>

                    <p>
                        해양은 지구 표면의 약 70%를 차지하며
                        지구 환경을 안정적으로 유지하는 핵심 공간입니다.
                        해양 생태계는 수많은 생물들이 연결된 하나의 시스템이며,
                        기후 조절, 산소 생산, 탄소 저장, 식량 제공 등
                        인간이 살아가기 위해 필요한 기능을 수행합니다.
                    </p>

                    <div className="card-grid">
                        <div className="info-card">
                            <h3>
                                🌱 산소 생산과 에너지 순환
                            </h3>
                            <p>
                                바다 속 식물성 플랑크톤은 광합성을 통해
                                막대한 양의 산소를 만들어냅니다.
                                작은 미생물처럼 보이지만 지구 대기의
                                산소 순환과 탄소 순환에서 중요한 역할을 합니다.
                                또한 플랑크톤 → 작은 물고기 → 큰 포식자로 이어지는
                                먹이사슬은 해양 생태계 균형을 유지합니다.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3>
                                🌎 기후 조절 기능
                            </h3>
                            <p>
                                바다는 대기 중 이산화탄소를 흡수하는
                                거대한 탄소 저장고입니다.
                                해양 생물이 흡수한 탄소는 생물이 죽은 후
                                심해로 이동하여 장기간 저장됩니다.
                                이러한 과정은 지구 온난화를 늦추는
                                자연적인 장치입니다.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3>
                                🐠 생물 다양성 유지
                            </h3>
                            <p>
                                산호초, 해초 숲, 심해 생태계는
                                수많은 생물에게 서식지를 제공합니다.
                                다양한 생물이 존재할수록 환경 변화에도
                                회복할 수 있는 힘이 커집니다.
                            </p>
                        </div>
                    </div>

                    <div className="example-box">
                        📌 사례
                        <p>
                            남극해에서는 식물성 플랑크톤이
                            대량의 탄소를 흡수하며
                            지구 기후 안정에 도움을 주고 있습니다.
                            하지만 해수 온도가 상승하면 이러한
                            탄소 순환 시스템이 약해질 위험이 있습니다.
                        </p>
                    </div>
                </section>

                {/* 위험 */}
                <section className="activity-section">
                    <h2>
                        ⚠️ 지금 우리 바다가 아픈 이유
                    </h2>

                    <div className="danger-box">
                        <div>
                            <h3>
                                🔥 해수 온도 상승과 산호초 백화현상
                            </h3>
                            <p>
                                지구 온난화로 바닷물 온도가 올라가면
                                산호와 함께 살아가는 미세 조류가 사라집니다.
                                산호는 색을 잃고 하얗게 변하며
                                심각한 경우 죽게 됩니다.
                                산호초는 수많은 해양 생물의 집이기 때문에
                                산호 감소는 전체 생태계 감소로 이어집니다.
                            </p>
                        </div>
                    </div>

                    <div className="danger-box">
                        <div>
                            <h3>
                                🗑️ 해양 쓰레기와 미세플라스틱
                            </h3>
                            <p>
                                플라스틱은 자연적으로 거의 분해되지 않습니다.
                                시간이 지나면서 작은 입자인
                                미세플라스틱으로 변하고
                                플랑크톤과 물고기가 먹이로 착각하여 섭취합니다.
                                결국 먹이사슬을 따라 인간에게도
                                영향을 줄 가능성이 있습니다.
                            </p>
                        </div>
                    </div>

                    <div className="example-box">
                        📌 사례
                        <p>
                            전 세계 해양으로 유입되는 플라스틱 쓰레기는
                            매년 수천만 톤 규모이며,
                            해양 생물의 몸속에서도 미세플라스틱이 발견되고 있습니다.
                        </p>
                    </div>

                    <div className="danger-box">
                        <div>
                            <h3>
                                🎣 남획 문제
                            </h3>
                            <p>
                                인간의 지나친 어업 활동은 특정 생물의
                                개체 수를 빠르게 감소시킵니다.
                                하나의 종이 줄어들면 먹이 관계가 무너지고
                                생태계 전체 균형이 흔들립니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 영향 */}
                <section className="activity-section">
                    <h2>
                        🚨 바다가 계속 아프다면 인류에게 생기는 문제
                    </h2>
                    <p>
                        해양 문제는 단순히 바다 생물만의 문제가 아닙니다.
                        인간의 식량, 경제, 기후 안정까지 직접적으로 연결됩니다.
                    </p>

                    <ul className="list">
                        <li>
                            🐟 어류 감소로 식량 공급 문제가 발생합니다.
                        </li>
                        <li>
                            🌡️ 탄소 흡수 능력 감소로 기후 변화가 심해집니다.
                        </li>
                        <li>
                            🧬 미세플라스틱이 먹이사슬을 통해 인간에게 이동할 수 있습니다.
                        </li>
                        <li>
                            💰 어업과 관광 산업 등 경제적 피해가 발생합니다.
                        </li>
                        <li>
                            🌊 생태계 붕괴로 회복하기 어려운 환경 변화가 발생할 수 있습니다.
                        </li>
                    </ul>
                </section>

                {/* 해결 */}
                <section className="activity-section">
                    <h2>
                        🌱 지금 인류가 진행하는 해결 방법
                    </h2>

                    <div className="solution-grid">
                        <div>
                            🌊 해양 보호구역 확대
                            <p>
                                중요한 생태 지역을 보호하여
                                생물 다양성을 유지합니다.
                            </p>
                        </div>
                        <div>
                            ♻️ 플라스틱 감소
                            <p>
                                일회용품 사용을 줄이고
                                재활용 시스템을 강화합니다.
                            </p>
                        </div>
                        <div>
                            🔬 과학 기술 활용
                            <p>
                                위성 관측과 생태 모델링을 통해
                                해양 변화를 예측합니다.
                            </p>
                        </div>
                        <div>
                            🌎 국제 협력
                            <p>
                                국가 간 협력을 통해
                                공동 해양 보호 정책을 만듭니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 결론 */}
                <section className="activity-section ocean">
                    <h2>
                        💙 우리가 만들어야 할 미래
                    </h2>
                    <p>
                        바다는 인간에게 많은 것을 제공하지만
                        무한한 자원은 아닙니다.
                        지금까지 인간의 활동으로 인해
                        해양 생태계는 큰 압박을 받고 있습니다.
                        하지만 보호 활동과 지속 가능한 생활 방식을 선택한다면
                        바다는 다시 회복할 수 있습니다.
                    </p>
                    <h3>
                        🌊 "바다을 지키는 것은 결국 우리의 미래를 지키는 일입니다."
                    </h3>
                </section>

            </div>
        </>
    );
};

export default Activity;