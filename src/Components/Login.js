import React from 'react'
import { useState } from 'react'
import { useAuth } from './Auth'
import{useNavigate,useLocation} from 'react-router-dom'

export const Login = () => {
    const [user,setUser]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const redirectPath =location.state?.path || "/"
    const handlelogin=()=>{
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }
  return (
    <div>
        <label>
            Username:{''}
            <input type="text" onChange={e=>setUser(e.target.value)} />
        </label>
        <button onClick={handlelogin}>login</button>
    </div>
  )
}
