import React from 'react'
import{Link,Outlet} from "react-router-dom"

export default function Products() {
  return (
    <>
    <div>
        <input type="search" placeholder='Products' />
    </div>
    <nav>
        <Link to='featured'>Featured Products</Link>
        <Link to='new'>New Products</Link>
    </nav>
    <Outlet/>
    </>
  )
}
