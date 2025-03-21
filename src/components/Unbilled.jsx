import React, { useState, useEffect, useRef } from 'react';

const Unbilled = () => {
    const totalImages = 149;

    const images = Array.from({ length: totalImages }, (_, index) => {
        return `/img/mobile/unbilled-${index + 1}.jpg`;
    });

    const [visibleIndex, setVisibleIndex] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const triggerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const triggerElement = triggerRef.current;
        const sectionElement = sectionRef.current;

        const handleWheel = (event) => {
            if (!isActive) return;

            event.preventDefault();

            const delta = Math.sign(event.deltaY);
            const newIndex = visibleIndex + delta;

            setVisibleIndex(Math.min(Math.max(newIndex, 0), totalImages - 1));
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
        <section ref={sectionRef} className="relative h-dvh w-screen overflow-x-hidden">
            <div id="unbilled-trigger" ref={triggerRef}>
                {isActive && (
                    <div>
                        <img
                            src={images[visibleIndex]}
                            alt={`Image ${visibleIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Unbilled;