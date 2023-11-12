import React from 'react'

import pageData from '../../app/pageData.json'
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
    const categories = pageData.categories;

    const renderFooter: () => any = () => {
        return categories.map(({ category, pages }) => (
            <div>
                <h2 className='text-lg font-medium'>{ category }</h2>
                <div className='flex flex-col items-start'>
                    {pages.map(({ page }) => (
                        <Button variant='link'>
                            <Link href='/'>
                            { page }
                            </Link>
                            </Button>
                    ))}
                </div>
            </div>
        ))
    }

  return (
    <div className='grid grid-cols-1 bg-secondary w-full p-6 gap-6'>
        {renderFooter()}
    </div>
  )
}
