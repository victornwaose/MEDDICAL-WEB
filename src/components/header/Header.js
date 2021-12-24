import React from "react";
import { BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header_container">
                <h1 className="logo">
                    MED<span>DICAL</span>
                </h1>
                <div className="header_details">
                    <div className="header_detail_container">
                        <div className="header_detail_container_icon">
                            <BiPhoneCall className="header_detail_container_icon" />
                        </div>
                        {/* icon */}
                        <div className="header_detail_container_text">
                            <h2>EMERGENCY</h2>
                            <h4>(237) 681-812-255</h4>
                        </div>
                    </div>
                </div>
                <div className="header_details">
                    <div className="header_detail_container">
                        <div className="header_detail_container_icon">
                            <BiTimeFive className="header_detail_container_icon" />
                        </div>
                        {/* icon */}
                        <div className="header_detail_container_text">
                            <h2>WORK HOURS</h2>
                            <h4>09:00 - 20:00</h4>
                        </div>
                    </div>
                </div>
                <div className="header_details">
                    <div className="header_detail_container">
                        <div className="header_detail_container_icon">
                            <VscLocation className="header_detail_container_icon" />
                        </div>
                        {/* icon */}
                        <div className="header_detail_container_text">
                            <h2>LOCATION</h2>
                            <h4>EVERYWHERE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
