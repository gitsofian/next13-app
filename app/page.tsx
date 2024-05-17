import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <main className='text-2xl text-black mr-5'>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <div>
        <Link href="/users">Users</Link>
      </div>
      <div>
        <ProductCard/>
      </div>
      
    </main>
  )
}
