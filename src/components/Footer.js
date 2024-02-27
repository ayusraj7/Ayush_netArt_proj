import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' lg:p-0 py-2 lg:h-[6%] border-red-100 bg-red-600 w-full flex flex-wrap justify-around items-center'>
        <div className='text-white flex gap-1 items-center'>
            <FaPhoneAlt/>
            <p>Toll free <b>1800 200 1234 </b></p>
        </div>
        <div className='text-white flex gap-1 items-center'>
            <FaFacebook/>
            <a href="https://www.facebook.com/crifluidsystemsglobal/">www.facebook.com/cripumps</a>
        </div>
        <div className='text-white flex gap-1 items-center'>
            <FaGlobe/>
            <a href="https://www.crifluidsystems.com/">www.crigroups.com</a>
        </div>
    </div>
  )
}

export default Footer