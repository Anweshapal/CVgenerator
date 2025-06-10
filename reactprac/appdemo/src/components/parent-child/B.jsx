import React from 'react'
import C from './C';
const bStyles = {
  width: "300px",
  boxShadow: "0 0 10px red",
  textAlign: "center",
  padding: "50px",
  margin: "30px auto",
};
function B({info}) {
  return (
    <div style={bStyles}>
        <h2>B component</h2>
        <br/>
        {/* <p>Data :{props.info}</p> */}
         <C data={info}/>
        
    </div>
  )
}

export default B