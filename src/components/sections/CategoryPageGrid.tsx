import React from 'react'
import PageCard from '../multiUse/PageCard'

import pageData from "../../app/pageData.json" assert { type: 'json'};

interface Props {
    category: number
}

export default function CategoryPageGrid({ category }: Props) {
    const layoutPages = pageData.categories[category].pages;

    const renderCards: () => any = () => {
        return layoutPages.map(({ page, description }) => (
<PageCard title={ page } description={ description }></PageCard>
        ))
    }

  return (
    <div className='grid grid-cols-1 gap-4 p-6'>
        {renderCards()}
    </div>
  )
}
