import React from 'react'
import{useNavigate} from 'react-router-dom'

export default function NoFound() {
    const navi=useNavigate('/')
  return (
    <>
    <div>NoFound</div>
    <button onClick={()=>navi('/')}>Go Back</button>
    </>
  )
}
