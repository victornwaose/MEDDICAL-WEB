import React from "react";

import {
    Hero,
    HeroCard,
    Detail,
    OurServices,
    OurSpecialty,
    Appoint,
    OurDoctor,
    OurContact,
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
            <OurContact />
        </div>
    );
};

export default HomePage;
