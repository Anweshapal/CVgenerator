import React from 'react'
import Details from './Details'
import { myHomeContext } from './context'
import { useState } from 'react'
function HomeContect() {
    let[state,setState]=useState("")
    let[data,setData]=useState("")
    const submitdata=()=>{
        //console.log(state);
         setData(state)
    }
  return (
    <div style={{padding:"50px"}}>
        <h2>Home Context</h2>
        <br/>
        <input type='text' placeholder='Enter text' onChange={(event)=>{
             setState(event.target.value)
        }}
        
        />
        <button onClick={submitdata}>Submit</button><br/>
        <hr/>
        <br/>
        <br/>
        <myHomeContext.Provider value={data}>
<Details/>
        </myHomeContext.Provider>
        
    </div>
  )
}

export default HomeContect