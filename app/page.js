import Image from "next/image";
import Header from "@/components/Header"
import Herosection from "@/components/Herosection";
import Youtubesection from "@/components/Youtubesection";
import Contactform from "@/components/Contactform"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Youtubesection />

      <section className="relative overflow-hidden">
        <div className="max-w-[100vw] overflow-hidden">
          <Image
            src="/Group 50.png"
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
          <Image src="/Group 57.png" alt="background" width={1920} height={1080} className="w-full h-auto" priority />
        </div>
      </section>


      <Contactform />



      <Footer />

    </div>
  )
}
