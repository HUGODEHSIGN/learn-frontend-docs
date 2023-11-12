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
    title: string,
    description: string
  }

export default function PageCard({ title, description }: Props) {
  return (
    <Card>
  <CardHeader>
    <CardTitle>{ title }</CardTitle>
    <CardDescription>{ description }</CardDescription>
  </CardHeader>
  <CardFooter>
    <Button>Visit Page</Button>
  </CardFooter>
</Card>
  )
}
