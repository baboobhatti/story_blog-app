
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='h-[100vh] opacity-50 bg-no-repeat bg-cover bg-center border-2 border-red-200 bg-[url("/blogImg/heroimg4.jpg")]'>
    <div className='mt-32 sm:mt-36'>
    <h1 className='text-center w-[310px] sm:w-[550px] text-3xl sm:text-5xl mx-auto  text-white font-semibold'>Create a Story for the Writters Cafe </h1>
    <h1 className='w-[230px] mx-auto flex items-center mt-8'><Link className='text-white font-semibold text-3xl rounded-full inline-block mx-auto px-12 py-2 bg-[#005073] hover:px-14 hover:py-3' href=''>Join Us</Link></h1>
    <h1 className='w-[230px] mx-auto flex items-center mt-8 sm:hidden'><Link className='text-white font-semibold text-3xl rounded-full inline-block mx-auto px-12 py-2 bg-[#005073] hover:px-14 hover:py-3' href=''>Stories</Link></h1>
    
    {/* <div className="bg-cover bg-center" style="background-image: url('/blogImg/authorImg.jpg')"></div> */}

    </div>
    </div>
    {/* <Image className='h-[90vh] opacity-45' src='/blogImg/authorImg.jpg' alt='photo' width={600} height={600}/>
    <h1 className='text-4xl relative bottom-[600px]  text-white font-semibold'>Make  a Story for the Writters Cafe</h1> */}
    {/* <Image className='w-screen h-[95vh] opacity-45' src='/blogImg/authorImg.jpg' alt='photo' width={600} height={600}/>
     <h1 className='text-5xl relative bottom-[500px] text-white left-28 font-semibold mx-auto'>Make  a Story for the Writters Cafe</h1> */}
    </>
  )
}

export default Hero
