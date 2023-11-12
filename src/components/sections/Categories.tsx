'use client'

import React from 'react'
import CategoryCard from '../multiUse/CategoryCard'

import pageData from "../../app/pageData.json" assert { type: 'json'};
import { Button } from '../ui/button';
import Link from 'next/link';



export default function Categories() {
    const categories = pageData.categories;
  

    const renderCards: () => any = () => {
        return categories.map(({ category, description, pages }) => (
            <CategoryCard key={ category } title={ category } description={ description }>
                {pages.map(({ page }) => (
                  <Button key={ page } variant='secondary' asChild>
                    <Link href='/'>{ page }</Link>
                  </Button>  
                ))}
            </CategoryCard>
        ))
    }

    console.log(renderCards())

  return (
    <div className='grid grid-cols-1 gap-6 p-6'>
      {renderCards()}
    </div>
  )
}
