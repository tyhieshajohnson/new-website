import React, { useState } from 'react';

const Faq = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const faqData = [
        {
            question: "how can I add my cards on CRED?",
            answer: "CRED automatically detects credit cards linked to your account. If your cards are not detected, just tap the 'credit cards' icon, click 'add a card', fill in the details, and you're good to go."
        },
        {
            question: "can I manage all my credit cards on CRED?",
            answer: "Yes. CRED supports cards from major Indian banks like HDFC, ICICI, SBI, Axis, Kotak, and AMEX. Track spends, monitor EMIs, spot hidden charges, and keep an eye on reward points. All in one place. You also get timely bill payment reminders for your cards."
        },
        {
            question: "what is CRED protect?",
            answer: "CRED protect helps you manage your credit cards by automatically detecting bills and statements. It also alerts you to hidden charges, tracks EMIs, sends smart bill reminders, and provides spending insights. This ensures you stay updated on your card activity with all essential information in one place."
        },
        {
            question: "how do I pay my credit card bills?",
            answer: "To pay your credit card bills, select the card, and choose from available payment options like UPI, net banking, or debit cards. CRED uses the Bharat Bill Payment System (BBPS) platform for secure and instant bill payments for the supported banks."
        },
        {
            question: "how does CRED keep my data secure?",
            answer: "CRED uses encryption and secure servers to protect user data. Security measures include two-factor authentication and regular system audits to ensure data privacy and protection."
        },
        {
            question: "what is know your perks?",
            answer: "Know your perks gives you a detailed breakdown of your card's benefits—reward points, exclusive offers, and fee structures—along with all the terms and conditions you need to know."
        },
        {
            question: "why cant I see perks for my card?",
            answer: "We're rolling this feature out in phases to ensure accuracy and reliability. If your card isn't supported yet, sit tight—we're working on bringing it to you soon."
        }
    ];

    return (
        <div className="faq-container">
            <div
                className="faq-header"
                onClick={toggleDropdown}
            >
                FREQUENTLY ASKED QUESTIONS
                <img
                    src="https://web-images.credcdn.in/v2/_next/assets/images/faq/down-arrow.png"
                    className={`${isDropdownOpen ? 'rotate' : ''}`}
                    alt="dropdown arrow"
                />
            </div>
            {isDropdownOpen && (
                <div className="faq-content">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question">
                                {faq.question}
                            </div>
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Faq;