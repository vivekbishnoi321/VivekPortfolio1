import React from 'react';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;