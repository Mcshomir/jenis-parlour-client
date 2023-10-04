import React from 'react';
import Banner from '../Banner/Banner';
import TreatmentSection from '../TreatmentSection/TreatmentSection';
import SecreenSection from '../ScreenSection/SecreenSection';
import Testmonial from '../Testmonial/Testmonial';
import ContuctMessage from '../ContuctMessage/ContuctMessage';
import SignUp from '../../Pages/SignUp/SignUp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TreatmentSection></TreatmentSection>
            <SecreenSection></SecreenSection>
            <Testmonial></Testmonial>
            <ContuctMessage></ContuctMessage>


        </div>
    );
};

export default Home;