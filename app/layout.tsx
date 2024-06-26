import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import NavBar from './NavBar';
import AuthProvider from "./auth/Provider"



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar/>
          <main>
            <Suspense fallback={<p>Loading...</p>}>
              {children}
            </Suspense>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
