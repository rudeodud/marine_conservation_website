import React from "react";
import Head from "../components/Head";
import "../styles/activity.css";

const Activity = () => {
    return (
        <>
            <Head />

            <div className="activity-page-wrapper">

                {/* HERO VISUAL BANNER */}
                <div className="activity-hero">
                    <div className="activity-hero-inner">
                        <h1>🐋 Research Archive</h1>
                        <p>지속 가능한 미래와 해양 생태계 보존을 위한 글로벌 학술 데이터 종합 분석</p>
                    </div>
                </div>

                {/* MAIN CONTENT INNER */}
                <div className="activity-content-container">

                    {/* 01. SECTION */}
                    <section className="activity-section">
                        <div className="section-header">
                            <h2>01. 해양 생태계의 주요 기능과 가치 분석</h2>
                            <p className="section-meta">
                                저자: Jinni Wu, Jia Xuan | 학술지: International Journal of Marine Science (2023)
                            </p>
                        </div>

                        <div className="split-grid">
                            <div className="split-item research-1-1">
                                <div className="split-text">
                                    <span className="sub-num">1.1</span>
                                    <h3>에너지 흐름 및 물질 순환 시스템</h3>
                                    <p>
                                        해양 생태계 에너지는 태양광에서 시작되어 식물성 플랑크톤과 저서생물의 광합성을 통해 1차 유기물로 생산됩니다. 이 에너지는 상위 포식자로 이어지는 먹이그물을 통해 순환하며 생태계 균형을 유지합니다. 또한, 해양 생물은 대량의 이산화탄소($CO_2$)를 흡수·저장하고 사후 심해로 침강시켜 탄소를 격리하는 거대한 탄소흡수원(Carbon sink) 역할을 수행하여 글로벌 기후 변화를 완화합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="split-item research-1-2">
                                <div className="split-text">
                                    <span className="sub-num">1.2</span>
                                    <h3>경제적 발전과 문화적 상호작용</h3>
                                    <p>
                                        해양은 지구 표면의 70%를 차지하며 온실가스를 조절할 뿐만 아니라, 인류에게 풍부하고 영양가 높은 먹거리를 제공하여 식량 안보에 기여합니다. 더불어 어업, 해운, 해양 관광업 등은 국가 경제의 중추 역할을 하며, 산호초 군락과 바다거북·돌고래 등은 생태계 균형 유지와 동시에 인류 문화에서 깊은 상징적·생태적 가치를 지니고 보존되고 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 02. SECTION */}
                    <section className="activity-section">
                        <div className="section-header">
                            <h2>02. 2030년을 향한 해양 위기와 미래 시나리오</h2>
                            <p className="section-meta">
                                저자: Delphi Ward, Jessica Melbourne-Thomas 등 | 학술지: Reviews in Fish Biology and Fisheries (2022)
                            </p>
                        </div>

                        <div className="split-grid">
                            <div className="split-item research-2-1">
                                <div className="split-text">
                                    <span className="sub-num">2.1</span>
                                    <h3>인류세의 위기와 두 가지 갈림길</h3>
                                    <p>
                                        지난 150년간 남획, 서식지 파괴, 오염, 기후 변화 등의 복합적 스트레스로 해양 생물 다양성이 급격히 감소했습니다. 이 논문은 미래 예측 기법을 통해 두 가지 시나리오를 제시합니다. 환경 규제가 방치되어 임계점(Tipping points)을 넘어서는 '현상 유지(Business-as-usual)' 경로와, 자원을 활용하면서도 생태계 복원력을 보존하는 '지속 가능한 미래(UN SDGs)'의 갈림길입니다.
                                    </p>
                                </div>
                            </div>

                            <div className="split-item research-2-2">
                                <div className="split-text">
                                    <span className="sub-num">2.2</span>
                                    <h3>지속 가능한 미래를 위한 5대 핵심 동인</h3>
                                    <p>
                                        현상 유지 경로를 탈피하기 위해 사회가 집중해야 할 5대 요소를 제안합니다. 시민들의 해양 리터러시를 높이는 '행동 변화', 원주민의 전통 생태 지식을 융합한 '지역 사회 관리', 과학적 모델링에 기반한 '정보 접근성', 관할권을 넘어선 '통합적 생태계 관리(EBM)', 그리고 자원을 재활용하는 '공평한 순환 경제'로의 전환이 즉각적으로 필요합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 03. DATA SECTION */}
                    <section className="activity-section">
                        <div className="section-header">
                            <h2>03. 글로벌 해양 폐기물 유입량 추이 통계</h2>
                            <p className="section-meta">
                                전세계 연간 해양 폐기물 유입량 추이 (2000년 ~ 2026년 현재 기준 정량 데이터)
                            </p>
                        </div>

                        <div className="data-display-container">
                            <div className="data-chart-fallback">
                                <div className="bar-wrapper"><div className="bar b1" style={{ height: '25%' }}></div><span>2000년<br /><b>4.8M톤</b></span></div>
                                <div className="bar-wrapper"><div className="bar b2" style={{ height: '50%' }}></div><span>2011년<br /><b>11.5M톤</b></span></div>
                                <div className="bar-wrapper"><div className="bar b3" style={{ height: '80%' }}></div><span>2020년<br /><b>18.8M톤</b></span></div>
                                <div className="bar-wrapper"><div className="bar b4" style={{ height: '100%' }}></div><span>2026년 현재<br /><b>22.5M톤</b></span></div>
                            </div>
                            <div className="data-text-box">
                                <p>
                                    인간의 활동으로 유입되는 해양 쓰레기는 매년 폭발적으로 증가하고 있습니다. 2011년 기점으로 2배 이상 폭증하였으며, 2020년 코로나19 사태 이후 배달 플라스틱의 사용량 증가가 고스란히 반영되었습니다. <strong>2026년 현재 기준, 연간 약 2,250만 톤에서 2,300만 톤 규모</strong>의 플라스틱 및 폐기물이 매년 바다로 유입되어 생태계 임계점을 위협하는 중입니다.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 04. SECTION */}
                    <section className="activity-section">
                        <div className="section-header">
                            <h2>04. 누적된 인간 영향(CHI)과 기능적 다양성 위기</h2>
                            <p className="section-meta">
                                출처: PubMed Central (PMC11410257) | 최신 생태학 연구 분석
                            </p>
                        </div>

                        <div className="split-grid">
                            <div className="split-item research-3-1">
                                <div className="split-text">
                                    <span className="sub-num">4.1</span>
                                    <h3>분류학적 다양성 vs 기능적 다양성</h3>
                                    <p>
                                        기존 해양 보호 정책은 '멸종 위기 종의 수' 같은 분류학적 기준에만 치우쳐 있었습니다. 본 연구는 해양 생물들이 생태계 내에서 수행하는 '역할'(영양분 순환, 퇴적물 뒤섞기 등)인 기능적 다양성(Functional diversity)에 주목합니다. 종의 숫자가 유지되더라도 특정 역할을 수행하는 생물 무리가 사라지면 바다의 자정 및 순환 시스템이 마비됩니다.
                                    </p>
                                </div>
                            </div>

                            <div className="split-item research-3-2">
                                <div className="split-text">
                                    <span className="sub-num">4.2</span>
                                    <h3>기능적 중복성 상실과 보호구역 대전환</h3>
                                    <p>
                                        전 지구적 인간 영향(CHI) 분석 결과, 청정 해역은 거의 남지 않았습니다. 특히 독특한 기능을 가진 종이 소수에 불과한 고위도 극지방 및 심해 생태계는 종의 소멸이 곧바로 대체 불가능한 '생태계 붕괴'로 이어질 수 있는 취약 상태입니다. 따라서 단순 희귀종 밀집지가 아닌, 지구의 허파와 위장 역할을 하는 '독특한 기능적 네트워크' 중심으로 해양보호구역(MPAs) 지정 기준을 대전환해야 합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 05. SECTION */}
                    <section className="activity-section">
                        <div className="section-header">
                            <h2>05. 미세플라스틱의 독성 유입과 먹이그물 교란</h2>
                            <p className="section-meta">
                                저자: Babak Sokouti (오하이오 대학교) | 학술지: Biology and Medicine (2024)
                            </p>
                        </div>

                        <div className="split-grid">
                            <div className="split-item research-4-1">
                                <div className="split-text">
                                    <span className="sub-num">5.1</span>
                                    <h3>1·2차 미세플라스틱의 체내 독성 침출</h3>
                                    <p>
                                        5mm 미만의 미세플라스틱은 치약·화장품에서 직접 배출된 1차 입자와, 유입된 큰 쓰레기가 자외선·파도에 부서진 2차 입자로 나뉩니다. 해양 생물들이 이를 먹이로 오인해 섭취 시 내장 폐색과 가짜 포만감으로 영양실조를 겪게 되며, 플라스틱 내부나 표면에 흡착된 비스페놀 A(BPA), 프탈레이트 등 잔류성 유기오염물질(POPs)이 체내로 침출되어 호르몬 교란과 종양을 유발합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="split-item research-4-2">
                                <div className="split-text">
                                    <span className="sub-num">5.2</span>
                                    <h3>생물 농축과 인간 건강으로의 역습</h3>
                                    <p>
                                        해양 먹이사슬의 기초인 동물플랑크톤이 미세플라스틱을 섭취하면서 발생한 타격은 상위 포식자로 고스란히 연쇄 전달됩니다. 해저 퇴적물 구조 변형으로 저서 생물 군집마저 파괴되고 있습니다. 결국 이 유해 입자들은 먹이사슬을 타고 상위로 전동하는 생물 농축(Bioaccumulate) 과정을 거쳐, 해산물을 섭취하는 최종 소비자인 인간의 몸속까지 도달하여 인류의 건강과 경제를 직접 위협하게 됩니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 06. CONCLUSION */}
                    <section className="activity-section ocean-footer">
                        <p className="footer-quote">
                            "인간이 바다에 가한 누적된 상처는 단순히 생물의 숫자를 줄이는 것을 넘어, 바다가 스스로를 정화하고 생명을 키워내는 기능적 네트워크를 파괴하고 있습니다."
                        </p>
                        <h3 className="footer-title">바다를 지키는 것은 결국 우리의 미래를 지키는 일입니다.</h3>
                    </section>

                </div>
            </div>
        </>
    );
};

export default Activity;