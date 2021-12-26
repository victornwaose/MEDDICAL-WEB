import React from "react";

import {
    Hero,
    HeroCard,
    Detail,
    OurServices,
    OurSpecialty,
    Appoint,
} from "../../components";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <HeroCard />
            <Detail />
            <OurServices />
            <OurSpecialty />
            <Appoint />
        </div>
    );
};

export default HomePage;
