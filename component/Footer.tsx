import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <div className="w-full px-2 sm:px-4 md:px-8 lg:px-10 xl:px-20 py-6">
  <div className="relative w-full bg-[#092C1C] rounded-[40px] min-h-[453px] flex items-center justify-between overflow-hidden px-6 py-8">

    {/* Top Left Logo */}
    <div className="absolute top-10 left-10">
      <Image
        src="/footer-logo.png" 
        alt="Logo"
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </div>

    <Image
      src="/layer.png" 
      alt="Decorative Shape"
      width={600}
      height={600}
      className="absolute w-[350px] h-[400px] top-[0px] lg:w-[600px] lg:h-[450px] lg:right-[300px] lg:bottom-0 object-contain"
    />

    {/* Bottom Right Socials */}
    <div className="absolute bottom-6 right-6 text-white flex flex-col items-end gap-2 text-sm">
      <div className="flex items-center gap-4">
        <div className='bg-white p-[8px] rounded-[10px]'>
        <Image src="/f.png" alt="Facebook" width={20} height={20} className='h-[20px]'/>
        </div>
         <div className='bg-white p-[8px] rounded-[10px]'>
        <Image src="/ins.jpg" alt="Instagram" width={25} height={25} className='w-[25px] h-[20px] text-center'/>
         </div>
         <div className='bg-white p-[8px] rounded-[10px]'>
        <Image src="/in.png" alt="Linkedin" width={25} height={25} className='w-[25px] h-[20px] text-center'/>
         </div>
         <div className='bg-white p-[8px] rounded-[10px]'>
        <Image src="/X.png" alt="Twitter" width={25} height={25} className='w-[25px] h-[20px] text-center'/>
         </div>
       
      
      </div>
      <p className="text-xs mt-2">Copyright © 2025. All Rights Reserved.</p>
    </div>

  </div>
</div>

  )
}

export default Footer