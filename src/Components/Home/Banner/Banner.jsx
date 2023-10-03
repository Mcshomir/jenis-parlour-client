import React from 'react';
import Button from '../../Sheard/Button/Button';
import image1 from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div className='grid gird-cols-1  md:grid-cols-2 my-6  '>
            <div className='p-12'>
                <h1 className='text-xl text-black '>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                <p className='py-8'>Welcome to BEAUTY SALON, where beauty and grace <br /> come together to empower every woman who walks <br /> through our doors. </p>
                <Button>Get an Appoinment</Button>
            </div>
            <div >
                <img className=' md:w-4/5 sm:w-2/3' src={image1} alt="" />
            </div>
        </div>
    );
};

export default Banner;