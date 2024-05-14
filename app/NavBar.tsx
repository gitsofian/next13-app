import React from 'react'
import Link from "next/link"

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 p-5'>
        <Link href="/" className='text-2xl mr-5 text-black'>Nodejs</Link>
        <Link href="/users" className='text-2xl text-black mr-5'>Users</Link>
    </div>
  )
}

export default NavBar