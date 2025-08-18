"use client"

import React, { useState } from 'react'

type Props = {
  categories: string[];
  onFilteredCats: (category: string) => void;
};


const CategoryButton = ({categories, onFilteredCats}: Props) => {
    const [activeCategory, setActiveCategory] = useState("all")

    const changeCategoryHandler = (activeCat: string) => {
           setActiveCategory(activeCat); // Update active button style
    onFilteredCats(activeCat);    // Tell parent to filter

    }
    
  return (
        <div className="flex gap-2 flex-wrap justify-center mt-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-md font-medium border transition-colors duration-200 
            ${activeCategory === category 
              ? "bg-[#FF9F43] text-white border-none" 
              : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          onClick={() => changeCategoryHandler(category)}
        >
          {category}
        </button>
      ))}
    </div>

  )
}

export default CategoryButton