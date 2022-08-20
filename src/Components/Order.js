import React from 'react'
import{useNavigate} from 'react-router-dom'

export default function Order() {
    const navi=useNavigate('/')
  return (
    <>
    <h2>Order Confirmed!</h2>
    <button onClick={()=>navi(-1)}>Go Back</button>
    </>
  )
}
