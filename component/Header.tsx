import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
  <div className="w-full h-[100vh] xl:h-[90vh] flex items-center justify-center">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-10 px-4 md:px-8 lg:px-10 xl:px-20 w-full mt-8 md:mt-3">
    <Image 
      src="/img1.png"
      alt=""
      width={500}
      height={500}
      className="w-full md:w-1/2 object-contain "
    />
    
    <div className="flex flex-col gap-2 w-full md:w-1/2 items-start">
  <div className="bg-[#F1F1F1] px-2 py-1 rounded-full flex items-center justify-center gap-1 my-2 w-fit">
    <button className="bg-[#FF9F43] p-1 text-[10px] text-white rounded-full">News</button>
    <span className="text-[#7B7A7A] text-[10px]">8 Mins Read</span>
  </div>
  <h2 className="md:text-5xl text-2xl font-semibold py-4">
    Unlocking Efficiency: The Power Of A Modern Technology 
  </h2>

  <p className='text-[18px] text-[#7B7A7A]'>
    How do you create compelling presentations that wow your colleagues and impress your managers? Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
  </p>

  <div className='flex gap-[8px] py-4'>
    <span className='text-[#FF7D00] text-[16px]'>Read More</span>
    <Image 
      src="/more-icon.png"
      alt=''
      width={20}
      height={20}
      className='w-[18px] h-[18px]'
    />
  </div>
</div>

  </div>
</div>


  )
}

export default Header