import React from 'react'

import pageData from "../app/pageData.json" assert { type: 'json'};

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { Menu } from 'lucide-react'
import Link from 'next/link';
import { Button } from './ui/button';

export default function Sidebar() {
  const categories = pageData.categories;

  const renderSheetNav: () => any = () => {
    return categories.map(({ category, pages }) => (

<AccordionItem key={ category } value={ category }>
    <AccordionTrigger>{ category }</AccordionTrigger>
    <AccordionContent className='text-left'>
      <div className="flex flex-col items-start">
      {pages.map(({ page, link }) => (
        <Button key={ page } variant="link" asChild>
 <Link href={ link }>{ page }</Link>
        </Button>
           
      ))}
      </div>
      
  

    </AccordionContent>
  </AccordionItem>

    ))
  }

  return (
    <Sheet>
  <SheetTrigger className='px-2 sm:hidden' asChild>
      <Button variant='ghost' size='icon'>
    <Menu/>
</Button>
  </SheetTrigger>
  <SheetContent side='left'>
    <SheetHeader>
      <SheetTitle className='text-left'>HUGO DEHSIGN</SheetTitle>
      <SheetDescription>
     
        
      <Accordion type="single" collapsible>
      {renderSheetNav()}
  
</Accordion>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}
