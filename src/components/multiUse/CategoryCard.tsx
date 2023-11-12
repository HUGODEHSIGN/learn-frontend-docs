

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

  interface Props {
    children: any,
    title: string,
    description: string,
  }

export default function CategoryCard({ children, title, description }: Props) {
  return (
    <Card>
    <CardHeader>
      <CardTitle>{ title }</CardTitle>
      <CardDescription>{ description }</CardDescription>
    </CardHeader>
    <CardContent>
      <div className='flex flex-col gap-2 items-start'>{ children }</div>
    </CardContent>
    <CardFooter>
      <Button>View Category</Button>
    </CardFooter>
  </Card>
  )
}
