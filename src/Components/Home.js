import React from 'react'
import{useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const StyledButton=styled.button`
background-color:${(props)=>(props.variant==='outline'?'green':'red')};
color:${(props)=>(props.variant==='outline'?'white':'black')};
border:none;
width:200px;
height:50px;
border-radius:5px;
cursor: pointer;
visibility:${(props)=>(props.variant==='outline'?'hidden':'visible')}
`
export default function Home() {
    const navigate=useNavigate()
  return (
    <>
   <h2>Home Page</h2>

   <StyledButton  onClick={()=>navigate('order')}>Place order</StyledButton>
   <StyledButton  variant="outline">Place order</StyledButton>
   </>
  )
}
