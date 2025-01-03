import Link from 'next/link'
import React from 'react'

const Button = (props:{linktext:string, display:string }) => {
  console.log(props);
  
  return (
       <>
       <button className={`w-[230px] mx-auto flex items-center mt-8 sm:${props.display} `}><Link className='text-white font-semibold text-3xl rounded-full inline-block mx-auto px-12 py-2 bg-[#005073] hover:px-14 hover:py-3' href='../blog'>{props.linktext}</Link></button>
       {/* <button className='w-[230px] mx-auto flex items-center mt-8 sm:hidden'><Link className='text-white font-semibold text-3xl rounded-full inline-block mx-auto px-12 py-2 bg-[#005073] hover:px-14 hover:py-3' href=''>Stories</Link></button> */}
       </>
  )
}

export default Button
