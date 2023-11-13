'use client'

import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { Button } from '../ui/button'
import Link from 'next/link'

  interface Props {
    children: any,
    title: string,
    description: string,
    link: string
  }

export default function CategoryCard({ children, title, description, link }: Props) {
  return (
    <Card>
    <CardHeader>
      <CardTitle>{ title }</CardTitle>
      <CardDescription>{ description }</CardDescription>
    </CardHeader>
    <CardContent>
      <div className='flex flex-wrap gap-2 items-start'>{ children }</div>
    </CardContent>
    <CardFooter>
      <Button asChild>
        <Link href={ link }>
        View Category
        </Link>
        </Button>
    </CardFooter>
  </Card>
  )
}
