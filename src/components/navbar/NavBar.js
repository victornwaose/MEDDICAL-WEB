import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaStream } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

import "./NavBar.css";

const NavBar = () => {
    const [close, setClose] = useState(false);

    const MobileView = () => {
        setClose(!close);
    };

    return (
        <div className="navBar">
            <div className="navBar_container">
                <div className="nav-icon" onClick={MobileView}>
                    {close ? <FaStream /> : <BsXLg />}
                </div>

                <div className={close ? "navBar_header" : "navMobile"}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Doctors</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="navBar-detail">
                    <div className="navBar_icon">
                        <BiSearch className="navBar_icon" />
                    </div>
                    <div className="button">Appointment</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
