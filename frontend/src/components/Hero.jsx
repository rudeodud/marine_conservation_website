import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {

    // 실제 사용할 이미지 목록
    const originalImages = [
        '/image.png',
        '/sea_tree_death.png',
        '/sea_tree_death2.png',
        '/tutle.png'
    ];

    // 무한 슬라이드를 위해 첫 번째 이미지를 맨 뒤에 추가
    // 결과:
    // [1, 2, 3, 4] → [1, 2, 3, 4, 1]
    const images = [...originalImages, originalImages[0]];

    // 현재 보여주는 이미지 번호
    // 처음엔 0번 이미지
    const [currentIndex, setCurrentIndex] = useState(0);

    // 슬라이드 애니메이션 ON/OFF
    const [isTransitioning, setIsTransitioning] = useState(true);

    // 컴포넌트가 실행되면 자동 슬라이드 시작
    useEffect(() => {

        // 5초마다 실행
        const timer = setInterval(() => {

            // 애니메이션 켜기
            setIsTransitioning(true);

            // 다음 이미지로 이동
            setCurrentIndex((prevIndex) => prevIndex + 1);

        }, 5000);

        // 컴포넌트 제거 시 타이머 정리
        return () => clearInterval(timer);

    }, []);

    // 슬라이드 애니메이션이 끝났을 때 실행
    const handleTransitionEnd = () => {

        // 마지막 복제 이미지에 도착했는지 확인
        if (currentIndex === originalImages.length) {

            // 애니메이션 끄기
            setIsTransitioning(false);

            // 첫 번째 이미지로 순간 이동
            setCurrentIndex(0);
        }
    };

    return (
        <section className="hero">

            {/* =========================
                배경 슬라이더
            ========================== */}
            <div className="hero-slider">

                {/* 실제 이동하는 슬라이더 영역 */}
                <div
                    className="hero-slider-inner"
                    style={{
                        // 이미지 개수만큼 전체 너비 증가
                        width: `${images.length * 100}%`,

                        // 현재 인덱스만큼 왼쪽 이동
                        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,

                        // 애니메이션 ON/OFF
                        transition: isTransitioning
                            ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                            : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >

                    {/* 이미지 반복 생성 */}
                    {images.map((src, index) => (

                        <div
                            key={index}
                            className="hero-slide"
                            style={{
                                // 각 슬라이드 너비
                                width: `${100 / images.length}%`,

                                // 배경 이미지 설정
                                backgroundImage: `url(${src})`
                            }}
                        />

                    ))}

                </div>

                {/* 글자가 잘 보이도록 어두운 오버레이 */}
                <div className="hero-overlay"></div>

                {/* 아래쪽 자연스러운 그라데이션 */}
                <div className="hero-bottom-fade"></div>

            </div>

            {/* =========================
                텍스트 콘텐츠
            ========================== */}
            <div className="hero-content">

                {/* 메인 제목 */}
                <h1>
                    푸른 바다를
                    <br />
                    미래 세대에게
                </h1>

                {/* 설명 문구 */}
                <p>
                    해양 생태계 보호와 복원을 위한
                    <br />
                    OceanGuard의 여정에 함께하세요.
                </p>

                {/* 버튼 영역 */}
                <div className="hero-actions">

                    {/* 후원 버튼 */}
                    <button className="primary-button">
                        후원하기
                    </button>

                    {/* 봉사활동 버튼 */}
                    <button className="secondary-button">
                        봉사활동 참여
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Hero;