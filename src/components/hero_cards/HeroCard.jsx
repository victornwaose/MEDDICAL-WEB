import React from "react";
import { BsCalendar4Week, BsPeople, BiMoney } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import "./HeroCard.css";

const HeroCard = () => {
    return (
        <div className="hero_card_container">
            <div className="hero_cards">
                <div className="hero_card">
                    <div className="hero_card_container">
                        <h4>Book an Appointment</h4>
                        <div>
                            {" "}
                            <BsCalendar4Week
                                style={{ width: "70px", height: "60px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="hero_card_1">
                    <div className="hero_card_container">
                        <h4>Book an Appointment</h4>
                        <div>
                            <BsPeople
                                style={{ width: "70px", height: "60px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="hero_card_2 ">
                    <div className="hero_card_container">
                        <h4>Book an Appointment</h4>
                        <div>
                            <FaRegMoneyBillAlt
                                style={{ width: "70px", height: "60px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
