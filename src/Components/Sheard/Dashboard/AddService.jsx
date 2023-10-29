
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddService = () => {
    const imgbbKey = '7a3419471dd38f4ece87c623e044a3f1'
    //console.log('bbKey',bbKey)
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm();

    const handleSign = (data) => {
        const image = data.img[0];
        console.log(image);
        const formData = new FormData()
        formData.append("image", image)

        const url = `https://api.imgbb.com/1/upload?&key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const addingServices = {
                        title: data.title,
                        description: data.description,
                        img: imgData.data.url,
                        price: data.price
                    }

                    fetch('http://localhost:5000/services', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addingServices)
                    })
                        .then(res => res.json())
                        .then(servicesData => {
                            console.log(servicesData);
                            if (servicesData.acknowledged) {
                                toast.success('successfully uploaded.......');
                                reset();

                            }
                        }).catch(error => {
                            console.log(error)
                        })


                }
            })

        // toast.success("submitted ....");

        //reset();
    };
    return (
        <div className="h-full bg-slate-100">
            <div>
                <div className="mt-5">
                    <form
                        className="p-5 rounded-3xl bg-white"
                        onSubmit={handleSubmit(handleSign)}
                        action=""
                    >
                        {/* <h1 className="py-3">Enter your email here : </h1> */}

                        <div className=" grid  grid-cols-2 gap-3 m-5 p-4">
                            <div>
                                <input
                                    placeholder="Enter the Title  : "
                                    className="input input-bordered w-full input-info  py-2 "
                                    {...register("title", { required: "title is required" })}
                                />
                                <p className="text-red-700">{errors.title?.message}</p>
                            </div>
                            <div>
                                {/* <input {...register("img")} type="file" id="" placeholder='Uplod image' /> */}
                                <input
                                    type="file"
                                    placeholder="chose your file "
                                    className="input input-bordered input-info py-2 "
                                    {...register("img", { required: "img is required" })}
                                />
                                <p className="text-red-700">{errors.img?.message}</p>
                            </div>

                            <div>
                                <input
                                    placeholder="Set the price $  "
                                    className="input input-bordered w-full input-info  py-2 "
                                    {...register("price", { required: "price is required" })}
                                />
                                <p className="text-red-700">{errors.price?.message}</p>
                            </div>

                            <div>
                                <input
                                    type="text-area"
                                    placeholder="About the Services :   "
                                    className="input input-bordered w-full input-info  py-2  h-32"
                                    {...register("description", {
                                        required: "description is required",
                                    })}
                                />
                                <p className="text-red-700">{errors.description?.message}</p>
                            </div>

                            <div className="flex justify-start">
                                <input
                                    type="submit"
                                    className="btn mr-5 mb-5 bg-gradient-to-r from-primary to-secondary text-white"
                                />
                            </div>
                        </div>

                        {/* <div className="m-5 p-4">
              <input
                placeholder="Enter your message "
                className=" textarea  py-2 input-bordered input-info w-4/5 h-[100px]"
                {...register("message", { required: "message is required" })}
              />
              <p className="text-red-700">{errors.message?.message}</p>
            </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;