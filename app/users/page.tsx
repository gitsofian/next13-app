import React from 'react'
import UserTable from './UserTable'
import NewUserPage from './new/page';
import Link from 'next/link';

interface Props {
  searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}:Props) => {

  console.log("sortOrder :", sortOrder);

  return (
    <>
        <p>{new Date().toLocaleTimeString()}</p>
        <Link href="/users/new" className='btn'>New User</Link>
        <h1>Users List Component</h1>
        <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage