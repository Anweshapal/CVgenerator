import {useRef, useState} from 'react'

function Timer() {
    let[timer,setTimer]=useState(0);
              let timerId=useRef();
    // let[timerId,setTimerId]=useState();
    const startTime=()=>{
    //   timerId= setInterval(()=>{
    //      setTimer((prevTime)=>prevTime+1)
    //    },1000)
    
      timerId.current=setInterval(() => {
            setTimer((prevTimer)=>prevTimer+1)
        },1000);
    ;

}

    const stopTimer=()=>{
        clearInterval(timerId .current)
    }

const resetTimer=()=>{
   setTimer(0);
}




   return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
        textAlign: "center",
        boxShadow: "0 0 10px black",
        padding: "50px",
      }}
    >
      <h2>Timer Value is : {timer}</h2><br/>
      <br />
      <button onClick={startTime}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Clear</button>
    </div>
  );
}

export default Timer