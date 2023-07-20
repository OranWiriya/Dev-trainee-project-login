import Loginform from '@/components/Loginform';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

function login() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <Loginform />
    </main>
  );
}

export default login;
