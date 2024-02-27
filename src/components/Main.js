import React from 'react'
import award from '../asserts/1.png'
import profilepic from '../asserts/2.png'
import items from '../asserts/3.png'
import  logo from '../asserts/logo.png'

const Main = () => {
  return (
    <div className='h-[93.3%]'>
        {/* logo */}
        <div className='h-[10%] mb-2  lg:relative'>
            <img src={logo} alt="C.R.I FLUID SYSTEMS" className='lg:absolute -top-4 sm:ml-[34%] h-[100px] ' />
        </div>
        {/* first part  */}
        <div className='w-full flex flex-col items-center md:flex-row  text-sm gap-4 sm:gap-1'>
            {/* first column */}
            <div className='md:w-[35%] '>
                <img src={award} alt="" className='h-[320px] w-full object-contain' />
            </div>
            {/* second column */}
            <div className='sm:x-0 px-3 md:w-[55%] flex flex-col gap-4 sm:gap-2'>
                <h1 className='font-bold'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
                <ul className='px-3 md:px-0 list-disc text-[13px]'>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <img src={profilepic} alt="C.R.I. Honour" className=' w-[90%] mx-auto md:mx-0 md:w-full md:h-[180px] sm:ml-[-20px] object-fill' />
                <p className='text-[13px]'>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>

        {/* second part  */}
        <div className='lg:w-full w-[90%] mx-auto mt-2  flex text-sm items-center flex-col border-b-2 mb-4 sm:mb-1 pb-2 border-red-600'>
            <p className='font-semibold'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <img src={items} alt="items" className=' h-[200px] sm:h-[120px] sm:w-[70%] mx-auto'/>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
        {/* third part  */}
        <div className='px-9  text-sm flex flex-col gap-3 lg:gap-1 items-center mb-4 lg:mb-0 '>
            <h1 className='font-bold '>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
            <p className='text-center'>CHEMICALS & PROCESS <span className='text-red-500'>|</span> POWER WATER & WASTE WATER <span className='text-red-500'>|</span> OILS & GAS <span className='text-red-500'>|</span> PHARMA <span className='text-red-500'>|</span> SUGARS & DISTILLERIES  <span className='text-red-500'>|</span> PAPER & PULP  <span className='text-red-500'>|</span> MARINE & DEFENCE <span className='text-red-500'>|</span> METAL & MINING  <span className='text-red-500'>|</span> FOOD & BEVERAGE PETROCHEMICAL & REFINERIES <span className='text-red-500'>|</span> SOLAR <span className='text-red-500'>|</span> BUILDING <span className='text-red-500'>|</span> HVAC <span className='text-red-500'>|</span>  FIRE FIGHTING <span className='text-red-500'>|</span> AGRICULTURE & RESIDENTIAL</p>

        </div>
        
    </div>
  )
}

export default Main