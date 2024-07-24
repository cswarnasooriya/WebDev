import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
    <div className="transform transition-all duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#6d096b]">
      <XMarkIcon className="w-[2rem] h-[2rem] absolute top-[2rem] text-pink-700 z-[202] right-[2rem] bg-white rounded-full" />

      <ul className="relative z-[201] space-y-10 flex flex-col h-[100%] items-center spax10 justify-center">

        <li className="text-[25px] cursor  text-yellow-300">
            <Link href="/">Home</Link>
        </li>

        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
            <Link href="/about">About</Link>
        </li>

        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
            <Link href="/service">Service</Link>
        </li>

        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
            <Link href="/customer">Customer</Link>
        </li>

        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
            <Link href="/blog">Blog</Link>
        </li>

</ul>
    </div>
  )
}

export default MobileNav
