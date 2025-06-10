import "./counter.css";
import {useState} from 'react'
function Counter(){
    var[state,setState]=useState(0)
    const increaseCount=()=>{
          // count+=1;
       setState(state+1);   
          
    };
    return <div className="counter">
       <h2>Counter App</h2>
       <p>Count Value is : {state}</p>
       <button onClick={increaseCount}>incount</button>
    </div>
}

export default Counter;