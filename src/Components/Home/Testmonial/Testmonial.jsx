import React from 'react';
import img1 from '../../../assets/images/Ellipse 90.png'
import img2 from '../../../assets/images/Ellipse 91.png'
import img3 from '../../../assets/images/Ellipse 92.png'
import { FaStar } from 'react-icons/fa';
const Testmonial = () => {

    return (

        <div >
            <h2 className='text-4xl italic text-center mt-20 py-6'>Testmonial</h2>
            <div className='grid grid-cols-1 md: grid-cols-3 mb-20'>

                <div className="card w-96 bg-base-100 shadow-xl p-5">
                    <div className='flex justify-center gap-6 align-middle'>
                        <figure >
                            <img src={img1} alt="Shoes" className="w-20 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2" />
                        </figure>
                        <div className='mt-4'>
                            <h2>Nash Patik</h2>
                            <p>CEO.Manpol</p>

                        </div>
                    </div>
                    <div className="card-body items-center text-center t">

                        <p className='text-left'>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus culpa dolor distinctio perspiciatis corrupti provident iusto autem nostrum voluptatibus obcaecati.</p>

                        <div className='flex text-orange-500 gap-2 justify-start text-left mt-5'>

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>



                    </div>
                </div>
                {/* card two */}
                <div className="card w-96 bg-base-100 shadow-xl p-5">
                    <div className='flex justify-center gap-6 align-middle'>
                        <figure >
                            <img src={img2} alt="Shoes" className="w-20 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2" />
                        </figure>
                        <div className='mt-4'>
                            <h2>Devid Milar</h2>
                            <p>CEO. Teddexl</p>

                        </div>
                    </div>
                    <div className="card-body items-center text-center t">

                        <p className='text-left'>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus culpa dolor distinctio perspiciatis corrupti provident iusto autem nostrum voluptatibus obcaecati.</p>

                        <div className='flex text-orange-500 gap-2 justify-start text-left mt-5'>

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>



                    </div>
                </div>

                {/* card 3 */}
                <div className="card w-96 bg-base-100 shadow-xl p-5">
                    <div className='flex justify-center gap-6 align-middle'>
                        <figure >
                            <img src={img3} alt="Shoes" className="w-20 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2" />
                        </figure>
                        <div className='mt-4'>
                            <h2>Cusal Mandal</h2>
                            <p>CEO.Fordex</p>

                        </div>
                    </div>
                    <div className="card-body items-center text-center t">

                        <p className='text-left'>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus culpa dolor distinctio perspiciatis corrupti provident iusto autem nostrum voluptatibus obcaecati.</p>

                        <div className='flex text-orange-500 gap-2 justify-start text-left mt-5'>

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testmonial;