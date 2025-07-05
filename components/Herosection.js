'use client';
import Image from "next/image";

const HeroSection = () => {
    return (
        <div>
            <div className="relative w-screen sm:h-[40vh] md:h-[50vh] lg:h-[84vh] overflow-hidden">
                <Image src="/img.jpg" alt="background" fill className="object-cover z-0 " priority />


                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start px-6 lg:px-16 pt-10 h-full text-white">

                    <div className="flex flex-col sm:flex-row bg-black border-2 border-green-400 rounded-xl overflow-hidden w-full  lg:w-[40%] sm:items-center">

                        <div className="flex justify-center items-center p-4 sm:p-0">
                            <Image
                                src="/yash1.png"
                                alt="shocked face"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>


                        <div className="p-4 text-center sm:text-left w-full">
                            <h2 className="text-2xl sm:text-3xl font-bold text-green-400">InvestKro</h2>
                            <p className="text-base sm:text-lg text-white">By YashBusinessman</p>
                            <div className="flex justify-center sm:justify-start items-center space-x-2 mt-4">
                                <Image src="/yt.png" alt="YouTube" width={40} height={40} />
                                <button className="bg-red-600 text-white px-4 py-1 rounded font-semibold text-sm sm:text-base">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>



                    <div>
                        <h1 className="lg:text-5xl md:text-4xl lg:mt-0 mt-5 sm:text-4xl sm:mb-60 font-bold text-white">
                            #No1 Finance Educator
                        </h1>
                        <div className="hidden lg:block absolute bottom-0 right-10">
                            <Image src="/AdobeExpress1.png" alt="pointing person" width={580} height={280} />
                        </div>
                    </div>

                </div>


                <div className="sm:absolute sm:left-6 sm:bottom-24 sm:z-10 mx-auto sm:block">
                    <p className="text-white font-semibold mb-2 text-2xl">Follow Us</p>
                    <div className="flex space-x-3">
                        <Image src="/yt.png" alt="YouTube" width={50} height={50} />
                        <Image src="/fb.png" alt="Facebook" width={50} height={50} />
                        <Image src="/instagram.png" alt="Instagram" width={50} height={50} />
                        <Image src="/xlogo.png" alt="X" width={50} height={50} />
                        <Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} />
                    </div>
                </div>


                <div className="absolute bottom-6 left-6 flex items-center space-x-3 z-10">
                    <button className="text-white bg-green-600 px-20 py-2 font-bold rounded-full shadow-xl">
                        Contact US
                    </button>
                    <Image src="/whatsapp.png" alt="whatsapp" width={50} height={50} />
                </div>
            </div>


            <section className="relative overflow-hidden">
                <div className="max-w-[100vw] overflow-hidden">
                    <Image
                        src="/Group 26.png"
                        alt="background"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="max-w-[100vw] overflow-hidden">
                    <Image
                        src="/Group 53.png"
                        alt="background"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="max-w-[100vw] overflow-hidden">
                    <Image
                        src="/Group 52.png"
                        alt="background"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>



        </div>


    );
};

export default HeroSection;




