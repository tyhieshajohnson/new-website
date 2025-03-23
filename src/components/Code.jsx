import React, { useState, useRef, useEffect } from 'react';

const Code = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const img = new Image();
        const fallbackImage = isMobile ? "/img/mobile/cta-fold-mobile-fallback.jpg" :
        "/img/desktop/cta-fold-desktop-fallback.jpg";
        img.src = fallbackImage;
        img.onload = () => {
            setIsImageLoaded(true);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

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
                        src="/videos/desktop/cta-fold-desktop.mp4"
                        media="(min-width: 768px)"
                    />
                    <source
                        src="/videos/mobile/cta-fold-mobile.mp4"
                        media="(max-width: 767px)"
                    />
                    Your browser does not support the video tag.
                </video>

                {isImageLoaded && (
                    <>
                        <img
                            src={isMobile ? "/img/mobile/cta-fold-mobile-fallback.jpg" :
                                "/img/desktop/cta-fold-desktop-fallback.jpg"}
                            alt="Video thumbnail"
                            className={`h-full w-full object-cover object-center absolute top-0 left-0
                                transition-opacity duration-500 ${
                                videoEnded ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                        {videoEnded && (
                            <div className="sc-1pisk27-0 iCAnxp" style={{ position: 'absolute', top: 0, left: 0, width:
                                '100%', height: '100%', zIndex: 20 }}>
                                <div className="sc-1pisk27-1 fqHnOB" style={{
                                    top: isMobile ? '10%' : '20%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    position: 'absolute',
                                    zIndex: 30
                                }}>

                                    {!isMobile && (
                                        <div className="sc-1pisk27-2 ibYucQ">
                                            <div className="sc-6ca9pz-0 kSMium">
                                                <div className="sc-6ca9pz-3 ialzGb" style={{
                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                    borderWidth: '1px',
                                                    borderColor: 'rgba(0, 0, 0, 0.2)',
                                                    padding: '20px 25px 20px 20px'
                                                }}>
                                                    <img src="/img/desktop/cred-qr.png"
                                                        className="sc-6ca9pz-4 eLznSh" />
                                                    <div className="sc-6ca9pz-5 gEftKE" style={{ color: 'rgb(0, 0, 0)' }}>
                                                        download<br />CRED
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {isMobile && (
                                        <div className="sc-1pisk27-2 ibYucQ">
                                            <div className="sc-6ca9pz-0 kSMium">
                                            </div>
                                            <div className="sc-6ca9pz-1 gynxAQ">
                                                <div className="sc-6ca9pz-2 enTSAE">
                                                    <a href="https://app.cred.club/k63y/ciofyb98" rel="noreferrer"
                                                        style={{ cursor: 'pointer' }}>
                                                        <div className="sc-b5xc4a-0 hNPQwt" style={{
                                                            backgroundColor: 'rgb(0, 0, 0)',
                                                            color: 'rgb(255, 255, 255)',
                                                            padding: '15px 20px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            width: '100%',
                                                            maxWidth: '300px',
                                                            marginTop: '1000px'
                                                        }}>
                                                            <div className="sc-b5xc4a-1 jpRlrZ" style={{
                                                                fontSize: '16px',
                                                                fontWeight: 'bold'
                                                            }}>
                                                                DOWNLOAD CRED
                                                            </div>
                                                            <svg width="30" height="10" viewBox="0 0 32 12" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" className="sc-b5xc4a-2
                                                            ggybSB" style={{ marginLeft: '10px' }}>
                                                                <path d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2
                                                                7.12494L30.5 7.12494V4.87494L2 4.87494L2
                                                                7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374
                                                                7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744
                                                                27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374
                                                                4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184
                                                                9.27259 29.4489 7.125 32 7.125V4.875Z" fill="white">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Code;