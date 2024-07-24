import Link from 'next/link'
import React from 'react'
import ButtonBlue from '../Components/Button/ButtonBlue'
import ButtonRed from '../Components/Button/ButtonRed'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

const Nav = () => {
  return (
    <div className="h-[12vh] bg-white shadow-md">
        <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
            <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800 "><span className="text-[27px] md:text-[40px] text-red-600">W</span>ebDev
            </h1>

            <ul className="hidden lg:flex items-center space-x-10">

                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/">Home</Link>
                </li>

                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/about">About</Link>
                </li>

                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/service">Service</Link>
                </li>

                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/customer">Customer</Link>
                </li>

                <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
                    <Link href="/blog">Blog</Link>
                </li>

            </ul>

            <div className="items-center flex space-x-2 md:space-x-5">
                <ButtonBlue text="Login" />
                <ButtonRed text="Sign Up" />
                <Bars3BottomRightIcon className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Nav
