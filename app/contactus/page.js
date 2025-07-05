import Image from "next/image"
import Contactform from "@/components/Contactform"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div>
        <Header/>
        <Contactform/>
        <Footer/>
    </div>
  )
}

export default page