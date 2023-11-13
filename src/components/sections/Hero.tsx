import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <>
    <div className='p-6 flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>A collection of interesting finds useful concepts I found on my journey to learn frontend development.</h1>
        <Button>View Docs</Button>
    </div>
    </>
  )
}
