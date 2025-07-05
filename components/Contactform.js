'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
    const [role, setRole] = useState('Entrepreneur');

    const roles = [
        'Entrepreneur',
        'Student',
        'Womenpreneur',
        'Marketer',
        'Professional'
    ];

    return (
        <div className="bg-[#1d1718] text-white p-8 flex flex-col items-center space-y-10 min-h-screen">
            {/* Form and Radio */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between gap-8">
                {/* Contact Form */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 rounded-lg text-black bg-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-lg text-black bg-white"
                    />
                    <input
                        type="text"
                        placeholder="+91 7045875115"
                        className="w-full p-3 rounded-lg text-black bg-white"
                    />
                    <input
                        type="text"
                        placeholder="WhatsApp No"
                        className="w-full p-3 rounded-lg text-black bg-white"
                    />
                    <button className="w-full bg-[#00e78c] text-black font-semibold p-3 rounded-lg cursor-pointer">
                        Submit
                    </button>
                </div>

                {/* Role Selection */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl font-bold mb-4 text-center">Who you are?</h1>
                    <div className="space-y-3">
                        {roles.map((r, idx) => (
                            <label key={idx} className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="role"
                                    checked={role === r}
                                    onChange={() => setRole(r)}
                                    className="accent-red-600 w-4 h-4"
                                />
                                <span>{r}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-6 mt-10">
                {/* Logo Card */}
                <div className="flex bg-black border-2 border-green-400 rounded-xl overflow-hidden w-full lg:w-[40%]">
                    <div className="">
                        <Image src="/yash1.png" alt="shocked face" width={150} height={150} />
                    </div>
                    <div className="p-4">
                        <h2 className="text-3xl font-bold text-green-400">InvestKro</h2>
                        <p className="text-lg text-white">By YashBusinessman</p>

                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                    <button className="bg-red-600 text-white py-4 px-30 rounded-lg text-lg font-semibold">
                        Subscribe Youtube
                    </button>
                    <button className="bg-white text-green-600 border-2 border-green-600 py-4 px-30 rounded-lg text-lg font-semibold flex items-center gap-2 justify-center">
                        <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
                        Whatsapp Me
                    </button>
                </div>
            </div>



        </div>



    )
}


export default ContactForm
