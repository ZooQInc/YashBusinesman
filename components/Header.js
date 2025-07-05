
'use client'
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-green-600 text-white px-6 py-3">
      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">YashBusinessman</h1>


        <nav className="hidden lg:flex space-x-6 font-semibold">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/courses" className="cursor-pointer">Courses</Link>
          <Link href="/products" className="cursor-pointer">Products</Link>
          <Link href="/software" className="cursor-pointer">Software</Link>
          <Link href="/aboutus" className="cursor-pointer">About Us</Link>
          <Link href="/contactus" className="cursor-pointer">Contact Us</Link>
        </nav>

        <div className="hidden lg:block">
          <button className="bg-white px-6 py-2 rounded-3xl text-black font-bold">Signup</button>
        </div>


        <button className="lg:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>


      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-white font-semibold flex flex-col">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/courses" className="cursor-pointer">Courses</Link>
          <Link href="/products" className="cursor-pointer">Products</Link>
          <Link href="/software" className="cursor-pointer">Software</Link>
          <Link href="/aboutus" className="cursor-pointer">About Us</Link>
          <Link href="/contactus" className="cursor-pointer">Contact Us</Link>
          <button className="bg-white px-6 py-2 rounded-3xl text-black font-bold w-fit">Signup</button>
        </div>
      )}
    </header>
  )
}

export default Header
