import React, { useState, useRef, useEffect } from 'react';

const Features = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const [showInitialImage, setShowInitialImage] = useState(true);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    const disableScroll = () => {
        document.body.classList.add('overflow-hidden');
    };

    const enableScroll = () => {
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        const initialImage = new Image();
        initialImage.src = "/img/desktop/cta-fold-desktop-fallback.jpg";
        initialImage.onload = () => {
            setIsImageLoaded(true);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setShowInitialImage(false);
                if (videoRef.current) {
                    videoRef.current.play().catch(error => {
                        console.error("Auto-play failed:", error);
                    });
                    disableScroll();
                }
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isInView]);

    const handleVideoEnded = () => {
        setVideoEnded(true);
        enableScroll();
    };

    useEffect(() => {
        return () => {
            enableScroll();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-dvh w-screen overflow-x-hidden">
            <div className="relative h-dvh w-screen overflow-hidden">
                {isInView && showInitialImage && isImageLoaded && (
                    <img
                        src="/img/desktop/mc-fold-desktop-poster.jpg"
                        alt="Initial image"
                        className="h-full w-full object-cover object-center absolute top-0 left-0"
                    />
                )}

                {isInView && !showInitialImage && isImageLoaded && videoEnded && (
                    <img
                        src={window.innerWidth < 768 ? "/img/mobile/multi-card-fold-fallback.jpg" :
                            "/img/desktop/mc-fallback.jpg"}
                        alt="Fallback image"
                        className="h-full w-full object-cover object-center absolute top-0 left-0"
                    />
                )}

                {isInView && !showInitialImage && !videoEnded && (
                    <video
                        ref={videoRef}
                        className="h-full w-full object-cover object-center"
                        onEnded={handleVideoEnded}
                        playsInline
                        muted
                        autoPlay
                    >
                        <source
                            src="/videos/desktop/multi-card-desktop-video.mp4"
                            media="(min-width: 768px)"
                        />
                        <source
                            src="/videos/mobile/multi-card-mobile-video.mp4"
                            media="(max-width: 767px)"
                        />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </section>
    );
};

export default Features;