import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setTimeout(() => {
                setIsMenuVisible(true);
            }, 200);
        } else {
            setIsMenuVisible(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-transform duration-200 py-20 ${
                    isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="container mx-auto px-12 flex items-center justify-between h-17">
                    <div className="text-white text-lg font-bold">
                        <img src="/img/desktop/footer-logo.png" alt="Logo" className="h-22"/>
                    </div>

                    <div>
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none p-7 border-1 border-[rgba(209,213,219,0.5)]"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 backdrop-blur-sm flex
                items-start justify-start z-40">
                    <div className={`flex flex-col space-y-10 py-70 text-left pl-30 transition-transform duration-500
                        ${isMenuVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                        <a href="#" className="text-white font-gilroy-medium tracking-widest hover:text-gray-100
                        text-2xl border-b border-gray-custom-gray block px-32 pl-0 hover:bg-gradient-to-r
                        hover:from-black hover:to-gray-700 transition duration-300 w-full h-20 flex items-center">
                        WHAT'S NEW</a>
                        <a href="#" className="text-white font-gilroy-regular tracking-widest hover:text-gray-100
                        text-2xl border-b border-[rgba(209,213,219,0.5)] block px-32 pl-0 pb-7">PAYMENTS</a>
                        <a href="#" className="text-white font-gilroy-regular tracking-widest hover:text-gray-100
                        text-2xl border-b border-[rgba(209,213,219,0.5)] block px-32 pl-0 pb-7">UPGRADES</a>
                        <a href="#" className="text-white font-gilroy-regular tracking-widest hover:text-gray-100
                        text-2xl border-b border-[rgba(209,213,219,0.5)] block px-32 pl-0 pb-7">COMPANY</a>
                        <a href="#" className="text-white font-gilroy-regular tracking-widest hover:text-gray-100
                        text-2xl border-b border-[rgba(209,213,219,0.5)] block px-32 pl-0 pb-7">INSIDER <br/> PERKS</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;