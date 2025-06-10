import React from 'react'
import D from './D';
const cStyles = {
  width: "300px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "50px",
  margin: "20px auto",
};
function C({data}) {
  return (
    <div style={cStyles}>
        <h2>C Component</h2>
        
        <D lala={data}/>
    </div>
  )
}

export default C