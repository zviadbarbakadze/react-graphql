import React, { useReducer } from 'react'

const initialState=[]
const reducer=(state,action)=>{
  switch(action){
    case'increment': return state+1
    case'decrement':return state-1
    case 'reset': return initialState
    default:return state
  }

}

export default function About() {
const[count,dispatch]=useReducer(reducer,initialState)


 
  return (
    <div>
 <div>{count}</div>
 <button onClick={()=>dispatch('increment')}>increment</button>
 <button onClick={()=>dispatch('decrement')}>decrement</button>
 <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}
