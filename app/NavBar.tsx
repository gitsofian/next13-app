import React from 'react'
import Link from "next/link"

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className='text-2xl mr-5 text-black'>Nodejs</Link>
        <Link href="/users" className='text-2xl text-black mr-5'>Users</Link>
        <Link href="/api/auth/signin" className='text-2xl text-black mr-5'>Login</Link>
    </div>
  )
}

export default NavBar