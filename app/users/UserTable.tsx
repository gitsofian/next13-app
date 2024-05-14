import React from 'react'
import {sort} from 'fast-sort'
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder:string
}
  

const UserTable = async ({sortOrder}:Props) => {

  const res = await fetch(
        "https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(sortOrder === "name"?  user => user.name: user=>user.email);

  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr className='p-1 py-1 border-t-orange-200 text-black text-3xl text-center'>
                    <th className=""><Link href="/users?sortOrder=name">Name</Link></th>
                    <th><Link href="/users?sortOrder=email">Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => 
                    <tr className='p-1 py-1 bg-stone-400 text-white text-lg hover:bg-slate-700' key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable