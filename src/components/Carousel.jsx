import React from 'react';

const Carousel = () => {
    return (
        <section>
            <div className="gGwbWp">
                <h1 className="fquCfu dYlzCk czXzVu">every touch is
                    <br /> pure power.</h1>

                <div className="hrudQH"></div>

                <div className="hHnUWF">
                    <div className="carousel-item">
                        <video playsInline autoPlay muted loop src="/videos/desktop/swipe.mp4" type="video/mp4" />
                        <div className="hdDaEA"></div>
                        <div className="hpTdVv">
                            <img src="/img/desktop/swipe-left.png" alt="swipe left" className="fBRsjM" />
                        </div>
                        <div className="lbxDUD">
                            <p className="kkVKoh">
                                SWIPE LEFT
                                <span className="buBswu">on any card to manage payment history, card offers, and more.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <video playsInline autoPlay muted loop className="edROEC" src="/videos/desktop/long-press.mp4"
                        type="video/mp4" />

                        <div className="sc-g6c3md-0 hdDaEA"></div>

                        <div className="hpTdVv">
                            <img src="public/img/desktop/tap-hold.png"
                            alt="tap hold" className="fBRsjM" />
                            <div className="lbxDUD">
                                <p className="kkVKoh">PRESS AND HOLD
                                    <span className="buBswu">
                                        a card to view balances, usage limits, recent activity and other key details.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <video playsInline autoPlay muted loop className="edROEC" src="/videos/desktop/smart-nav.mp4"
                        type="video/mp4" />

                        <div className="hdDaEA"></div>

                        <div className="hpTdVv">
                            <img src="/img/desktop/smart-nav.png" alt="smart nav" className="fBRsjM" />
                            <div className="lbxDUD">
                                <p className="kkVKoh">SMART NAVIGATION
                                    <span className="buBswu">makes switching between cards seamless</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;