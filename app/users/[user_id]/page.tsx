import { notFound } from 'next/navigation'
import React from 'react'


interface Props {
    params: {
      user_id:number, 
      name:string
    }
}

const UserDetailsPage = ({params: {user_id, name}}: Props) => {

  if (user_id>10) notFound()

  return (
    <div>
        User Details Page: {user_id}
    </div>
  )

}

export default UserDetailsPage
