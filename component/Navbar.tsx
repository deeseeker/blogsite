import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
   <div className="h-12 p-4 md:h-24 border-b-2 border-[#041910]">
  <div className="flex items-center justify-between lg:px-10 xl:px-20">
    <Image 
      src="/m-logo.png" 
      alt="" 
      width={40}
      height={40}
      className="object-contain" 
    />
    <div className="flex items-center border rounded-full px-4 py-2 bg-white w-[150px] md:w-[200px] shadow-sm" style={{ borderColor: "#041910" }}>
      <Image src="/search-normal.png" alt="Search" width={16} height={16} />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 outline-none bg-transparent text-sm placeholder:text-gray-500 w-full"
      />
    </div>
  </div>
</div>

  )
}

export default Navbar