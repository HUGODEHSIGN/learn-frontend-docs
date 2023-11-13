import React from 'react'

import pageData from '../../app/pageData.json'
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
    const categories = pageData.categories;

    const renderFooter: () => any = () => {
        return categories.map(({ category, pages, link }) => (
            <div>
                <Button variant='link' className='text-lg font-medium' asChild>
                    <Link href={ link }>
                    { category }
                    </Link>
                    </Button>
                <div className='flex flex-col items-start'>
                    {pages.map(({ page, link }) => (
                        <Button variant='link'>
                            <Link href={ link }>
                            { page }
                            </Link>
                            </Button>
                    ))}
                </div>
            </div>
        ))
    }

  return (
    <div className='grid grid-cols-1 bg-secondary w-full p-8 gap-6'>
        {renderFooter()}
    </div>
  )
}
