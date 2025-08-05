'use client';
import Image from "next/image";
import Link from "next/link";

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

                        <Link href="https://www.youtube.com/@yashbusinessman" target="_blank"><Image src="/yt.png" alt="YouTube" width={50} height={50} /></Link>
                        <Link href="https://www.facebook.com/share/19i5do9s32/" target="_blank"><Image src="/fb.png" alt="Facebook" width={50} height={50} /></Link>
                        <Link href="/"><Image src="/instagram.png" alt="Instagram" width={50} height={50} /></Link>
                        <Link href="https://x.com/YashBusinessman?t=W1aKh-98c71x5cTwcbQ5Pg&s=08" target="_blank"><Image src="/xlogo.png" alt="X" width={50} height={50} /></Link>
                        <Link href="https://www.linkedin.com/in/yash-businessman-goswami-a29412336/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Image src="/linkedin.png" alt="LinkedIn" width={45} height={45} /></Link>
                        <Link href="https://t.me/YashBusinessman" target="_blank"><Image src="/telegram.png" alt="telegram" width={45} height={45} /></Link>

                    </div>
                </div>


                <div className="absolute bottom-6 left-6 flex items-center space-x-3 z-10">
                    <button className="text-white bg-green-600 px-20 py-2 font-bold rounded-full shadow-xl">
                        Contact Us
                    </button>
                    <Link href="https://whatsapp.com/channel/0029VaWuLRzFXUudPqEcNX3R"><Image src="/whatsapp.png" alt="whatsapp" width={50} height={50} /></Link>
                </div>
            </div>


            <section className="relative overflow-hidden">
                {/* Background Image */}
                <div className=" overflow-hidden">
                    <Image
                        src="/group103.png"
                        width={100}
                        height={100}
                    />
                </div>

                {/* Profile Section */}
                <div className="bg-[#0066cc] text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
                    {/* Left Text */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed">
                            " I'm Yashveer Goswami <br />
                            Formerly Know as Yash <br />
                            Businessman, I teach Finance, <br />
                            Stock Market, Business, <br />
                            Marketing, Many More <br />
                            Educational Things "
                        </p>
                        {/* Signature (replace with image if needed) */}
                        <div className="mt-4 text-2xl font-signature">Yash</div>
                    </div>

                    {/* Right Side Image */}
                    <div className="md:w-1/2 flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Who I am ?</h2>
                        <img
                            src="/profile-image.png" // Replace with actual path
                            alt="Yashveer Goswami"
                            className="w-64 h-auto rounded-lg shadow-lg"
                        />
                    </div>
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




