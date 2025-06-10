import {useState} from 'react'
import "./Ref.css";
function Ref() {
    let[state,setState]=useState(""); 
    let value;
    const updateState=()=>{
        setState(100)
    }
    const displayValue=()=>{
        console.log(value);
    }
    const updateValue=()=>{
      value="value got update"; 
    }
  return (
    <div className='refContainer'>
        <h2>Ref Component :{state}</h2>
        <button onClick={updateState}>Update State</button>
        <button onClick={updateValue}>Updata value</button>
        <button onClick={displayValue}>Display</button>
    </div>
  )
}

export default Ref