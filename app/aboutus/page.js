import Image from "next/image"
import Header from "@/components/Header"
import Coursesection from "@/components/Coursesection"
import Contactform from "@/components/Contactform"
import Footer from "@/components/Footer"
import Link from "next/link"

const page = () => {
    return (
        <div>
            <Header />

            <section className="grid grid-cols-1 sm:grid-cols-2 bg-gray-900 w-full min-h-[83.5vh] px-6 py-10 sm:py-16 overflow-y-hidden">
                {/* Left Section */}
                <div className="flex flex-col justify-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        I am Yashveer Goswami formerly known as Yash Businessman, I teach finance, stock market, business, marketing, and much more.
                    </p>

                    <Image
                        src="/signature.png"
                        alt="Signature"
                        width={100}
                        height={100}
                        className="mx-auto sm:mx-0 mt-2"
                    />

                    <div className="mt-6 sm:mt-10">
                        <h1 className="text-white text-xl sm:text-2xl mb-4">Follow Us</h1>
                        <div className="flex gap-4 sm:gap-5 flex-wrap">
                            <Link href="https://www.youtube.com/@yashbusinessman" target="_blank"><Image src="/yt.png" alt="YouTube" width={50} height={50} /></Link>
                            <Link href="https://www.facebook.com/share/19i5do9s32/" target="_blank"><Image src="/fb.png" alt="Facebook" width={50} height={50} /></Link>
                            <Link href="/"><Image src="/instagram.png" alt="Instagram" width={50} height={50} /></Link>
                            <Link href="https://x.com/YashBusinessman?t=W1aKh-98c71x5cTwcbQ5Pg&s=08" target="_blank"><Image src="/xlogo.png" alt="X" width={50} height={50} /></Link>
                            <Link href="https://www.linkedin.com/in/yash-businessman-goswami-a29412336/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><Image src="/linkedin.png" alt="LinkedIn" width={45} height={45} /></Link>
                            <Link href="https://t.me/YashBusinessman" target="_blank"><Image src="/telegram.png" alt="telegram" width={45} height={45} /></Link>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative w-full h-[300px] sm:h-[450px] mt-10 sm:mt-0 my-auto">
                    <Image
                        src="/yashabout.png"
                        alt="Yashveer"
                        fill
                        className=" object-contain sm:object-cover"
                    />
                </div>
            </section>




            <section>
                <Coursesection />
            </section>


            <section>
                <Image src="/Group 98.png" width={500} height={300} alt="image" className="min-h-30vw w-full" />
            </section>


            <section>
                <Image src="/hurryup.png" width={500} height={300} alt="image" className="h-20vw w-full items-center" />
            </section>

            <section>
                <Contactform />
            </section>

            <Footer />
        </div>
    )
}

export default page