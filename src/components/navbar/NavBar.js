import React from "react";
import { BiSearch } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar_container">
                <div className="navBar_header">
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
