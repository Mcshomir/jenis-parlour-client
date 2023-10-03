import React from 'react';
import Button from '../../Sheard/Button/Button';

const ContuctMessage = () => {
    return (
        <div className='w-1/2 mx-auto  bg-orange-50 my-10'>
            <h1 className='text-4xl text-center my-10'>Let us handle your  <br />
                project, professionally.</h1>

            <div className='flex '>

                <div>
                    <input type="text" placeholder="FirstName" className="input input-bordered input-md w-full max-w-xs" />
                    <input type="text" placeholder="Email" className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="LastName" className="input input-bordered input-md w-full max-w-xs" />
                    <input type="text" placeholder="Number" className=" input input-bordered input-md w-full max-w-xs" />
                </div>




            </div>
            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <Button>Send Message</Button>


        </div>
    );
};

export default ContuctMessage;