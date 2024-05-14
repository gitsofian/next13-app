import React from 'react'

interface Props {
    params: {user_id:number, photo_id:number}
}

const UserPhotoPage = ({params:{user_id, photo_id}}: Props) => {
  return (
    <div>User Photo Page {user_id}, {photo_id}</div>
  )
}

export default UserPhotoPage