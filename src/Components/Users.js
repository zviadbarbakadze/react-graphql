import React from 'react'
import{Outlet,useSearchParams} from 'react-router-dom'

export default function Users() {
    const[searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'
  return (
    <div>
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
        <Outlet/>
        <div>
            <button onClick={()=>setSearchParams({filter:'active'})}>Active users</button>
            <button onClick={()=>setSearchParams({})}>Reset filter</button>
        </div>
        {
            showActiveUsers?<h2>Showing Active users</h2> : <h2>Sowing all users</h2>
        }
    </div>
  )
}
