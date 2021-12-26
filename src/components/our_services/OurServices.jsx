import React from "react";
import { FaPills } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";
import { GiHeartPlus, GiHealthNormal } from "react-icons/gi";

import doctors1 from "../../images/doctors1.jpg";
import doctor3 from "../../images/doctor3.jpg";
import "./OurServices.css";

const OurServices = () => {
    return (
        <div className="ourServices">
            <div className="ourServices_heading">
                <h4>CARE YOU CAN BELIEVE IN</h4>
                <h2>Our Services</h2>
            </div>
            <div className="ourServices_container">
                <div className="left">
                    <div className="left_container">
                        <FaPills
                            className="icon"
                            style={{ width: "70px", height: "30px" }}
                        />
                        <h4>Free CheckUp</h4>
                    </div>
                    <div className="left_container">
                        <GiHeartPlus
                            className="icon"
                            style={{ width: "70px", height: "30px" }}
                        />
                        <h4>Cardiogram </h4>
                    </div>
                    <div className="left_container">
                        <GiHealthNormal
                            className="icon"
                            style={{ width: "70px", height: "30px" }}
                        />
                        <h4> DNA Testing</h4>
                    </div>
                    <div className="left_container">
                        <BiDonateBlood
                            className="icon"
                            style={{ width: "70px", height: "30px" }}
                        />
                        <h4>Blood Banking</h4>
                    </div>

                    <button>View more</button>
                </div>
                <div className="middle">
                    <h4>A passion for putting patient first</h4>
                    <div className="middle_grid">
                        <div className="gridOne">
                            <span></span>A passion for healing
                        </div>
                        <div className="gridTwo">
                            <span></span>5-stars care
                        </div>
                        <div className="gridThree">
                            {" "}
                            <span></span>All our best
                        </div>
                        <div className="gridFour">
                            <span></span>A legacy of Excellence{" "}
                        </div>
                        <div className="gridFive">
                            {" "}
                            <span></span>Always Caring
                        </div>
                    </div>
                    <p>
                        we provide services that mind blowing with experienced
                        doctor that deals with all kind of disease and they are
                        full ready to attend with the best response you can get{" "}
                    </p>
                    <p>
                        we provide services that mind blowing with experienced
                        doctor that deals with all kind of disease and they are
                        full ready to attend with the best response you can get{" "}
                    </p>
                </div>
                <div className="right">
                    <div className="right_one">
                        <img src={doctors1} alt="img" />
                        <div className="borders">
                            <span className="borderOne"></span>
                            <span className="borderTwo"></span>
                            <span className="borderThree"></span>
                        </div>
                    </div>
                    <div className="right_one">
                        <img src={doctor3} alt="img" />
                        <div className="borders">
                            <span className="borderOne"></span>
                            <span className="borderTwo"></span>
                            <span className="borderThree"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
