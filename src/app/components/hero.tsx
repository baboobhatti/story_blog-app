
// import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import Button from './button'


const Hero = () => {
  return (
    <>
    <div className='h-[100vh] opacity-50 bg-no-repeat bg-cover bg-center bg-[url("/blogImg/heroimg4.jpg")]'>
    <div className='pt-44 sm:pt-36'>
    <h1 className='text-center w-[310px] sm:w-[550px] text-3xl sm:text-5xl mx-auto  text-white font-semibold'>Create a Story for the Writters Cafe </h1>
    <Button  linktext='Join Us' display='flex' />
    <Button  linktext='Stories' display='hidden' />
    </div>
    </div>
    </>
  )
}

export default Hero
