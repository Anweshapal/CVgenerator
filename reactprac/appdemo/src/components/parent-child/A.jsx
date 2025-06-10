import React from 'react'
import B from './B';
import { useState } from 'react';
const aStyles = {
  width: "500px",
  boxShadow: "0 0 10px green",
  textAlign: "center",
  margin: "50px auto",
  padding: "50px",
};
function A() {
    let[state,setState]=useState("..");
  return (
    <div style={aStyles}>
        <h2>A component</h2>
        <br/>
        <button onClick={()=>{setState("Anwesha")}}>Pass data to B</button>
        <B info={state}/>
    </div>
  )
}

export default A