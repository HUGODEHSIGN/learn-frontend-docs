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
    title: string,
    description: string,
    link: string
  }

export default function PageCard({ title, description, link }: Props) {
  return (
    <Card>
  <CardHeader>
    <CardTitle>{ title }</CardTitle>
    <CardDescription>{ description }</CardDescription>
  </CardHeader>
  <CardFooter>
    <Button asChild>
        <Link href={link}>
        Visit Page
        </Link>
        </Button>
  </CardFooter>
</Card>
  )
}
