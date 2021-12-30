import React from "react";

import "./Appoint.css";

const Appoint = () => {
    return (
        <div className="appoint">
            <div className="appoint_container">
                <div className="appoint_text">
                    <h2>Book an Appointment</h2>
                    <p>
                        Booking an appointment with us as being made easy with
                        quality health assurance we provide for you, you can
                        take these huge step to providing you and your family
                        quality healthCare by booking an appointment{" "}
                    </p>
                </div>
                <div className="appoint_info">
                    <div className="appoint_info_detail">
                        <input type="text" placeholder="Name" />
                        <select>
                            Gender
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <input type="text" placeholder="Email" />
                        <input type="number" placeholder="Phone" />
                    </div>{" "}
                    <textarea rows="21" cols="46" placeholder="Enter Message" />
                </div>
            </div>
        </div>
    );
};

export default Appoint;
