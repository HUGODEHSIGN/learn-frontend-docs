import React from 'react'
import PageCard from '../multiUse/PageCard'

import pageData from "../../app/pageData.json" assert { type: 'json'};

interface Props {
    category: number
}

export default function CategoryPageGrid({ category }: Props) {
    const pages = pageData.categories[category].pages;

    const renderCards: () => any = () => {
        return pages.map(({ page, description }) => (
<PageCard title={ page } description={ description } link={`${pageData.categories[category].category.toLowerCase()}/${page.toLowerCase()}`}></PageCard>
        ))
    }

  return (
    <div className='grid grid-cols-1 gap-4 p-6'>
        {renderCards()}
    </div>
  )
}
