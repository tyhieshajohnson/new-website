import React, { useState, useRef, useEffect } from 'react';

const Cards = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        const fallbackImage = window.innerWidth < 768 ? "/img/mobile/hero-fold-mobile-fallback.jpg" :
        "/img/desktop/hero-fold-desktop-fallback.jpg";
        img.src = fallbackImage;
        img.onload = () => {
            setIsImageLoaded(true);
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        videoElement.play().catch(error => {
                            console.error("Auto-play failed:", error);
                        });
                    } else {
                        videoElement.pause();
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden">
                <video
                    ref={videoRef}
                    className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
                        videoEnded ? 'opacity-0' : 'opacity-100'
                    }`}
                    onEnded={handleVideoEnded}
                    playsInline
                    muted
                >
                    <source
                        src="/videos/desktop/single-card.mp4"
                        media="(min-width: 768px)"
                    />
                    <source
                        src="/videos/mobile/single-card-fold-mobile.mp4"
                        media="(max-width: 767px)"
                    />
                    Your browser does not support the video tag.
                </video>

                {isImageLoaded && (
                    <img
                        src={window.innerWidth < 768 ? "/img/mobile/single-card-fold-mobile-fallback.jpg" :
                            "/img/desktop/single-card-fold-desktop-fallback.jpg"}
                        alt="Video thumbnail"
                        className={`h-full w-full object-cover object-center absolute top-0 left-0 transition-opacity
                            duration-500 ${
                            videoEnded ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                )}
            </div>
        </div>
    );
};

export default Cards;