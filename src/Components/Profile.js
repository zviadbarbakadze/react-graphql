import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth= useAuth()
    const navigate=useNavigate()
    const handlelogout=()=>{
        auth.logout()
        navigate('/')
    }
  return (
    <div>
        <h2>Welcome {auth.user}</h2>
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}
