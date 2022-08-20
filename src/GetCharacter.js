import React from 'react'
import { useParams } from 'react-router-dom'
import useCharacter from './Hooks/useCharacter'

export default function GetCharacter() {
    const{id}=useParams()
    const{error,loading,data}=useCharacter(id)
    if(error){
        return <h2>error</h2>
    }
    if(loading){
        return <div className='loading'>Loading...</div>
    }
    if(data){
      console.log(data)
    }
  
  return (
    <div className='person'>
        <img src={data.character.image} alt=""  className="onech" />
        <h2 className='name'>{data.character.name}</h2>
       <div className='episodes'> 
        {data.character.episode.map((item,index)=>{
          return <div className='episode' key={index}>
                   <div className='epi'>Episode:</div> {item.name}
                </div>
         
        })}
         </div>
    </div>
  )
    
  
}
