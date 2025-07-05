import Header from "@/components/Header"
import Image from "next/image"
import Coursesection from "@/components/Coursesection"
import Contactform from "@/components/Contactform"
import Footer from "@/components/Footer"



const page = () => {
    return (
        <div>
            <Header />
            <div>
                <div className="relative w-screen sm:max-h-[84vh] min-h-40vh overflow-hidden">
                    <Image src="/background.jpg" alt="background" fill className="object-cover z-0" priority />

                    <section className="grid grid-cols-1 lg:grid-cols-2 relative h-full w-full z-10">
                        {/* Left Section */}
                        <div className="flex flex-col justify-start p-4 sm:p-8 text-white">
                            <div className="border-2 border-white rounded-xl w-full md:w-[80%] lg:w-[35vw] h-auto bg-black bg-opacity-50 p-4">
                                <div className="flex items-center gap-4">
                                    <Image src="/icon.png" width={60} height={60} alt="icon" className="w-[60px] sm:w-[100px]" />
                                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">#No 1 learning platform</h1>
                                </div>

                                <div className="flex gap-4 justify-center items-center mt-6 flex-wrap">
                                    <Image src="/googleplay.png" width={150} height={120} alt="googleplay" className="w-[120px] sm:w-[150px]" />
                                    <Image src="/android.png" width={200} height={120} alt="android" className="w-[140px] sm:w-[180px]" />
                                </div>

                                <div className="mt-5">
                                    <h1 className="text-2xl sm:text-3xl text-orange-500 mb-2">HURRY UP NOW!</h1>
                                    <h3>Follow Fodoo</h3>
                                </div>

                                <div className="flex gap-3 mt-4 flex-wrap">
                                    <Image src="/yt.png" alt="YouTube" width={40} height={40} className="w-[30px] sm:w-[40px] cursor-pointer" />
                                    <Image src="/fb.png" alt="Facebook" width={40} height={40} className="w-[30px] sm:w-[40px] cursor-pointer" />
                                    <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="w-[30px] sm:w-[40px] cursor-pointer" />
                                    <Image src="/xlogo.png" alt="X" width={40} height={40} className="w-[30px] sm:w-[40px] cursor-pointer" />
                                    <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="w-[30px] sm:w-[40px] cursor-pointer" />
                                </div>
                            </div>

                            <Image src="/appstore.png" width={150} height={120} alt="appstore" className="w-[120px] sm:w-[150px] mt-6" />
                        </div>

                        {/* Right Section */}
                        <div className="relative flex-1 p-4 hidden lg:block">
                            {/* Position box absolutely to fine-tune placement */}
                            <div className="absolute top-[40%] left-[5%] sm:top-[45%] sm:left-[10%] lg:top-[50%] lg:left-[8%] z-20">
                                <div className="border-2 border-green-700 rounded-lg bg-white p-4 text-center shadow-md w-[200px] sm:w-[250px]">
                                    <h1 className="text-xl sm:text-2xl font-bold">500k+ downloads</h1>
                                    <Image src="/googleplay.png" width={200} height={120} alt="googleplay" className="mx-auto mt-4 w-[140px] sm:w-[200px]" />
                                </div>
                            </div>
                            
                            {/* Person image */}
                            <div className="hidden lg:block absolute right-10 bottom-[-50px] z-20">
                                <Image src="/group102.png" width={500} height={500} alt="group" className="w-[250px] sm:w-[350px] lg:w-[500px]" />
                            </div>

                        </div>

                    </section>
                </div>



                <section>
                    <div className="bg-[#f5f5ff] py-10 px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                            <div className="border-2 border-black text-center py-8 px-4 rounded-md bg-white">
                                <h1 className="text-3xl font-bold text-blue-600">250+</h1>
                                <p className="text-gray-600 mt-2">Websites Developed</p>
                            </div>

                            <div className="border-2 border-black text-center py-8 px-4 rounded-md bg-white">
                                <h1 className="text-3xl font-bold text-blue-600">500k+</h1>
                                <p className="text-gray-600 mt-2">YouTube Subscribers</p>
                            </div>

                            <div className="border-2 border-black text-center py-8 px-4 rounded-md bg-white">
                                <h1 className="text-3xl font-bold text-blue-600">300k+</h1>
                                <p className="text-gray-600 mt-2">Followers</p>
                            </div>

                            <div className="border-2 border-black text-center py-8 px-4 rounded-md bg-white">
                                <h1 className="text-3xl font-bold text-blue-600">50k+</h1>
                                <p className="text-gray-600 mt-2">Students</p>
                            </div>

                            <div className="border-2 border-black text-center py-8 px-4 rounded-md bg-white">
                                <h1 className="text-3xl font-bold text-blue-600">300k+</h1>
                                <p className="text-gray-600 mt-2">Reviews</p>
                            </div>

                            <div className="border-2 border-black text-center py-8 px-4 rounded-md bg-white">
                                <h1 className="text-3xl font-bold text-blue-600">25+</h1>
                                <p className="text-gray-600 mt-2">Courses Launched</p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <Coursesection />

            <div>
                <Image src="/group 88.png" width={500} height={500} alt="image" className="w-full h-auto" />
            </div>

            <div>
                <Image src="/group 89.png" width={500} height={500} alt="image" className="w-full h-auto" />
            </div>

            <div>
                <Image src="/group 85.png" width={500} height={500} alt="image" className="w-full h-auto" />
            </div>

            <Contactform />
            <Footer />

        </div >
    )
}

export default page