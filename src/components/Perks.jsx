import React, { useState, useEffect, useRef } from 'react';

const Perks = () => {
    const totalImages = 338;

    const images = Array.from({ length: totalImages }, (_, index) => {
        return `/img/desktop/perks-${index + 1}.jpg`;
    });

    const [visibleIndex, setVisibleIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const triggerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const triggerElement = triggerRef.current;

        const handleWheel = (event) => {
            if (!isActive) return;

            event.preventDefault();

            const delta = Math.sign(event.deltaY);
            const newIndex = visibleIndex + delta;

            setVisibleIndex((prevIndex) => {
                return Math.min(Math.max(prevIndex + delta, 0), totalImages - 1);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsActive(true);
                        window.addEventListener("wheel", handleWheel, { passive: false });
                    } else {
                        setIsActive(false);
                        window.removeEventListener("wheel", handleWheel);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (triggerElement) {
            observer.observe(triggerElement);
        }

        return () => {
            if (triggerElement) {
                observer.unobserve(triggerElement);
            }
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isActive, visibleIndex, totalImages]);

    return (
        <section ref={sectionRef} className="unbilled-section">
            <div id="unbilled-trigger" ref={triggerRef}>
                {isActive && (
                    <div className="image-container">
                        <img
                            src={images[visibleIndex]}
                            alt={`Image ${visibleIndex + 1}`}
                            className="unbilled-image"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Perks;