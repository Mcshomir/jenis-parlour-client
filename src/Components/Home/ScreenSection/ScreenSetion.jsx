import React from 'react';
import screenPic from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const SecreenSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-orange-50 py-20'>
            <div><img className=' md:w-4/5 sm:w-2/3' src={screenPic} alt="" /></div>
            <div>
                <h1 className='text-3xl'>Let us handle your screen <span className='text-orange-400 text-3xl'>Professionally</span>.</h1>
                <p className='text-xl my-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae inventore, debitis natus, consequatur culpa, voluptate ad iure tenetur numquam neque dolores illum est asperiores tempore consequuntur dicta? Doloribus, facere cupiditate?.</p>
                <div className='flex gap-10'>
                    <div>
                        <h4 className='text-4xl text-orange-400'>500+</h4>
                        <p>Happy custoumer</p>
                    </div>
                    <div>
                        <h4 className='text-4xl text-orange-400'>6+</h4>
                        <p>Total services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecreenSection;