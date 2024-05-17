'use client';

import React from 'react'
import Link from "next/link"
import { useSession } from 'next-auth/react';

const NavBar = () => {

  const {status, data: session} = useSession();

  if (status === "loading") return null;

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className='text-2xl mr-5 text-black'>Nodejs</Link>
        <Link href="/users" className='text-2xl text-black mr-5'>Users</Link>
        { status === "authenticated" &&
           <div className='text-2xl text-black mr-5'>
              {session.user!.name}
              <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
           </div> }
        { status === 'unauthenticated' && <Link href="/api/auth/signin" className='text-2xl text-black mr-5'>Login</Link>}
    </div>
  )
}

export default NavBar