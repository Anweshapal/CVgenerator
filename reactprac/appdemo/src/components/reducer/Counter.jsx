import React, { useReducer } from 'react'
import "./Counter.css";
import counterReducer from './counterReducer';
function Counter() {
  let[state,dispatch]=useReducer(counterReducer,{count:0});
  const incount=()=>{
    dispatch({type:"INC"})
  }
const decount=()=>{
    dispatch({type:"DEC"})
  }
  const clear=()=>{
    dispatch({type:"CLEAR"})
  }

  return (
    <div className="reducerCounter">
        <h2>Counter App with useReducer() hook :{state.count}</h2>
        <button onClick={incount}>inCount</button>
        <button onClick={decount}>deCount</button>
        <button onClick={clear}>clear</button>
    
    </div>
  )
}

export default Counter 