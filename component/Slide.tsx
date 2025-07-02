"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Focus on Efficiency and Personalization",
    message: "Effortless Workflow: Build your perfect to-do list.",
    image: "/startup.png",
    img: "/usermark.png"
  },
  {
    id: 2,
    title: "Online Platform that connect people from all walks of life",
    message: "Effortless Workflow: Build your perfect to-do list.",
    image: "/marriage.png",
    img: "/article2.png"
  },
  {
    id: 3,
    title: "Meaqat Platform, the greatest platform ever",
    message: "Effortless Workflow: Build your perfect to-do list.",
    image: "/sport.png",
    img: "/article1.png"
  },
  
]

const Slide = () => {

     const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    const interval = setInterval(
      // () => setCurrentSlide((prev)=>prev+1),
      () => setCurrentSlide((prev)=> (prev === data.length - 1 ? 0 : prev + 1)),
       2000
)
return () => clearInterval(interval)
  }, [])


  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-10 xl:px-20 py-6">
  <div className="flex justify-between items-center w-full bg-[#092C1C0D] p-3 sm:p-4 md:p-6 rounded-lg gap-2 sm:gap-4 min-h-[300px]">
    
    {/* Left Image */}
    <div className="w-[25%] sm:w-[20%]">
      <Image 
        src={data[currentSlide].image}
        alt="Startup" 
        width={120} 
        height={150} 
        className="w-full h-auto object-contain"
      />
    </div>
    
    {/* Center Text */}
    <div className="w-[45%]">
      <h2 className="text-base sm:text-lg md:text-2xl lg:text-[28px] text-[#041910] font-bold">
          {data[currentSlide].title}
      </h2>
      <p className="mt-2 text-xs sm:text-sm md:text-base">
          {data[currentSlide].message}
      </p>
    </div>
    
    {/* Right Image + Button */}
    <div className="w-[30%] flex flex-col items-end justify-between gap-2">
      <Image 
        src={data[currentSlide].img}
        alt="User Mark" 
        width={80} 
        height={80} 
        className="w-[60px] h-[60px] object-contain"
      />
      <button className="bg-[#041910] text-white px-4 py-2 rounded text-xs sm:text-sm">
        Start Now
      </button>
    </div>

  </div>
</div>

  )
}

export default Slide