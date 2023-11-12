import React from 'react'

interface Props {
    children: string,
    title: string
}

export default function CategoryPageHero({ children, title }: Props) {
  return (
    <div className='grid gap-4 p-6'>
    <h1 className='text-4xl font-bold'>{ title }</h1>
    <p>{ children }</p>
    </div>
  )
}
