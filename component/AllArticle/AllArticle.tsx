"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import {data} from './data'
import CategoryButton from './CategoryButton'
import ArticleCat from '../ArticleCat'

const AllArticle = () => {
    const [cats, setCats] = useState(data)
    const categories = data.map(item => item.category)
    const uniqueCategories = ["All", ...new Set(categories)]
    // console.log(uniqueCategories)

    // Function to filter categories
    const filterCategoryHandler = (category:string)=>{
      
        if(category === "All"){
            setCats(data)
            return;
        }

        const filteredCats = data.filter(cat => cat.category === category)
        setCats(filteredCats)
    }
  return (
     <div className="w-full items-center flex flex-col px-4 md:px-8 lg:px-10 xl:px-20 mt-20 md:mt-2">
            <h2 className='text-3xl font-semibold mt-12'>All Articles</h2>
          <div className='container'>
            <CategoryButton 
            categories={uniqueCategories} 
            onFilteredCats={filterCategoryHandler}
            />
            <ArticleCat cats={cats}/>
          </div>
        
          </div>
  )
}

export default AllArticle