import React from 'react';
import Banner from './Banner/Banner';
import Testmonial from './Testmonial/Testmonial';
import ContuctMessage from './ContuctMessage/ContuctMessage';
import SecreenSection from './ScreenSection/ScreenSetion';
import ServiceSection from './ServiceSection/ServiceSection';

const AllHome = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceSection></ServiceSection>

            <SecreenSection></SecreenSection>
            <Testmonial></Testmonial>

            <ContuctMessage></ContuctMessage>

        </div>
    );
};

export default AllHome;