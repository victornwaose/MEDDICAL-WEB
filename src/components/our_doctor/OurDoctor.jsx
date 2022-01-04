import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa";

import "./OurDoctor.css";
import { data } from "../../data/Data";

const OurDoctor = () => {
    const [carousels, setCarousels] = useState(data);
    console.log(carousels);

    const item = carousels.map((carousel) => {
        return (
            <div className="carousel">
                <div className="carousel-profiles">
                    <img src={carousel?.images} alt="img" />
                    <div className="carousel_info">
                        <h4>{carousel?.doctorName}</h4>
                        <h2>{carousel?.skills}</h2>
                        <div className="carousel_social">
                            <FaLinkedin />
                            <FaFacebook />
                            <FaInstagramSquare />
                        </div>
                    </div>
                    <div className="carousel_moreDetail">
                        <h4>view more</h4>
                    </div>
                </div>
            </div>
        );
    });
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        790: {
            items: 3,
        },
    };

    return (
        <div className="ourDoctor">
            <div className="ourDoctor_heading">
                <h4>TRUSTED CARE </h4>
                <h2>Our Doctor </h2>
            </div>
            <AliceCarousel
                mouseTracking
                keyboardNavigation8
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                responsive={responsive}
                items={item}
            />
        </div>
    );
};

export default OurDoctor;
