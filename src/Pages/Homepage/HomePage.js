import React from "react";

import {
    Hero,
    HeroCard,
    Detail,
    OurServices,
    OurSpecialty,
} from "../../components";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <HeroCard />
            <Detail />
            <OurServices />
            <OurSpecialty />
        </div>
    );
};

export default HomePage;
