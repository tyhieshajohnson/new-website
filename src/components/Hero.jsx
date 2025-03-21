import React, { useState, useRef, useEffect } from 'react';

const Hero = () => {
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

    const handleVideoLoad = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Auto-play failed:", error);
            });
        }
    };

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
                    onLoadedData={handleVideoLoad}
                    onEnded={handleVideoEnded}
                    playsInline
                    muted
                    autoPlay
                >
                    <source
                        src="/videos/desktop/hero-fold-desktop-video-1.mp4"
                        media="(min-width: 768px)"
                    />
                    <source
                        src="/videos/mobile/hero-fold-mobile.mp4"
                        media="(max-width: 767px)"
                    />
                    Your browser does not support the video tag.
                </video>

                {isImageLoaded && (
                    <img
                        src={window.innerWidth < 768 ? "/img/mobile/hero-fold-mobile-fallback.jpg" :
                            "/img/desktop/hero-fold-desktop-fallback.jpg"}
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

export default Hero;