// import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`${inter.className}`}
    >
      <Navbar />
    </main>
  )
}
