import Navbar from '@/components/Navbar'
import Registerform from '@/components/Registerform'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] });

function register() {
  return (
    <main className={`${inter.className}`}>
    <Navbar />
    <Registerform />
    </main>
  )
}

export default register