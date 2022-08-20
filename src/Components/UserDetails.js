import React from 'react'
import{useParams} from 'react-router-dom'

export default function UserDetails() {
    const params=useParams()
    const userId=params.userId
  return (
    <h2> UserDetails {userId}</h2>
  )
}
