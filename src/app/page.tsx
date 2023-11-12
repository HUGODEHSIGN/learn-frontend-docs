import Categories from '@/components/sections/Categories'
import Disclaimer from '@/components/sections/Disclaimer'
import Hero from '@/components/sections/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Disclaimer/>
      <Categories/>
    </main>
  )
}
