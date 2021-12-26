import React from "react";
import { FaArrowRight } from "react-icons/fa";

import doc3 from "../../images/doc3.jpg";

import "./Detail.css";

const Detail = () => {
    return (
        <div className="detail">
            <div className="detail_container">
                <h4>WELCOME TO MEDDICAL</h4>
                <h2> A Great Place to Receive Care</h2>
                <p>
                    At MEDDICAL we provide you the best of health care and all
                    health related services at a very convince price with our
                    well train doctor on standby 24/7 ready to attend to your
                    needs why not us a try{" "}
                </p>
                <div className="detail_learn">
                    <h4>Learn More</h4>
                    <FaArrowRight
                        style={{ marginTop: "4px", marginLeft: "6px" }}
                        className="icon"
                    />
                </div>
            </div>{" "}
            <div className="images_container">
                <img src={doc3} alt="doctor" className="images" />
                <div className="border">
                    <span className="border1"></span>
                    <span className="border2"></span>
                    <span className="border3"></span>
                </div>
            </div>
        </div>
    );
};

export default Detail;
