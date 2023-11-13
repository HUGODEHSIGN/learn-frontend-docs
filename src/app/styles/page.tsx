import CategoryPageHero from '@/components/sections/CategoryPageHero'
import React from 'react'

import pageData from "../../app/pageData.json" assert { type: 'json'};
import { Separator } from '@/components/ui/separator';
import CategoryPageGrid from '@/components/sections/CategoryPageGrid';

export default function page() {
    const categoryIndex = 2;
    const categories = pageData.categories;
  return (
    <div>
        <CategoryPageHero title={categories[categoryIndex].category}>{categories[categoryIndex].description}</CategoryPageHero>
        <Separator/>
        <CategoryPageGrid category={categoryIndex}/>
    </div>
  )
}
