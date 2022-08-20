import React from 'react'
import { Link } from 'react-router-dom'
import useCharacters from './Hooks/useCharacters'


export default function GetCharacters() {

    const{loading,error,data}=useCharacters()
    if(loading){
        return <div className='loading'>loading....</div>
    }
    if(error){
        console.log(error)
    }
    if(data){
        console.log(data.characters.results[0].id)
    }
  return (
    <div className='card' >
        {data.characters.results.map(item=>{
            return <Link to={`/${item.id}`} key={item.id} className="card-item" >
                < img src={item.image} alt=""  />
                <h2>{item.name}</h2>
            </Link>
        })}
    </div>
  )
}
