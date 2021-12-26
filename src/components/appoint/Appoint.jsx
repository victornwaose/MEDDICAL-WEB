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
                        take th4e huge step to providing you and your family
                        quality healthCare by booking an appointment{" "}
                    </p>
                </div>
                <div className="appoint_info">
                    <div>
                        <input type="text" placeholder="Name" />
                        <select>
                            Gender
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <input type="text" placeholder="Email" />
                        <input type="number" placeholder="Phone" />
                        <textarea
                            row="31"
                            column="10"
                            placeholder="Enter Message"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoint;
