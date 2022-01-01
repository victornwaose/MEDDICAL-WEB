import React from "react";

import {
    Hero,
    HeroCard,
    Detail,
    OurServices,
    OurSpecialty,
    Appoint,
    OurDoctor,
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
            <OurDoctor />
        </div>
    );
};

export default HomePage;
