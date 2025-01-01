'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='bg-[#005073] flex justify-between px-4 pl-3 md:px-8 py-2'>

    <div className='flex items-center gap-1'><Image className='rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]' src='/blogImg/logo.png' alt='photo' width={70} height={70}/><span className='text-[22px] md:text-3xl font-semibold text-white'>Writters Cafe</span></div>
    {/* 'flex items-center ml-30' */}
    <div className={`${
                isOpen ? "block" : "hidden"
              } z-10 bg-[#005073] py-2 sm:py-0 border-t-2 border-white sm:border-none absolute top-16 left-0 w-full sm:static sm:w-auto sm:flex sm:items-center md:mr-2 lg:mr-24`}>
   <ul className='text-white text-lg md:text-xl lg:text-2xl text-center flex gap-2 justify-center flex-col sm:flex-row sm:gap-6'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/'>Stories</Link></li>
        <li><Link href='/'>Join Us</Link></li>
        <li><Link href='/'>About us</Link></li>

      </ul>
    </div>
     
    <div className='flex items-center sm:hidden h-6 mt-3'>
    <button
              className=" text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
    </div>
    </div>
        </>
  )
}

export default Navbar
