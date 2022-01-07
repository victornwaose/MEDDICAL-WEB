import React from "react";
import { VscArrowUp } from "react-icons/vsc";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_logo">
                    <h1>MEDDICAL</h1>
                    <p>Leading the way in Health Care Service</p>
                    <p>Excellence, Trust and Care </p>
                </div>
                <div className="footer_links">
                    <h4>Imported Link</h4>
                    <div className="footer_link">
                        <p>Appointment</p>
                        <p>Services</p>
                        <p>Doctors</p>
                        <p>About Us</p>
                    </div>
                </div>
                <div className="footer_contacts">
                    <h4>Contact Us</h4>
                    <div className="footer_contact">
                        <p>call: (237) 681-812-255</p>
                        <p>nwaosevictor1234@gmail.com</p>
                        <p>Address: Asaba Delta State</p>
                    </div>
                </div>
                <div className="footer_newsletter">
                    <h4>NewsLetter</h4>
                    <div className="footer_newsletter_email">
                        <p>Enter your email</p>
                        <VscArrowUp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
