import React from "react";
import { BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { VscLocation, VscMail } from "react-icons/vsc";

import "./OurContact.css";

const OurContact = () => {
    return (
        <div className="our_contact">
            <div className="our_contact_heading">
                <h4>GET IN TOUCH</h4>
                <h2>Our Contact</h2>
            </div>
            <div className="our_contact_cards">
                <div className="our_contact_card">
                    <BiPhoneCall className="our_contact_card_icon" />
                    <div className="our_contact_card_text">
                        <h4>Emergency</h4>
                        <p>(237) 681-812-255</p>
                        <p>(237) 681-812-255</p>
                    </div>
                </div>
                <div className="our_contact_card">
                    <VscLocation className="our_contact_card_icon" />
                    <div className="our_contact_card_text">
                        <h4>Location</h4>
                        <p>23 Okponta Road Ibusa</p>
                        <p>Asaba Delta State</p>
                    </div>
                </div>
                <div className="our_contact_card">
                    <VscMail className="our_contact_card_icon" />
                    <div className="our_contact_card_text">
                        <h4>Email</h4>
                        <p>nwaosevictor1234@gmail.com</p>
                    </div>
                </div>
                <div className="our_contact_card">
                    <BiTimeFive className="our_contact_card_icon" />
                    <div className="our_contact_card_text">
                        <h4>Working Hours</h4>
                        <p>Morning: 7am - 5pm</p>
                        <p>Evening: 5pm - 7am</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurContact;
