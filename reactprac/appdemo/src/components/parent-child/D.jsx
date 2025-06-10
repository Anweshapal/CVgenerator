import React from 'react'
import E from './E';
const dStyles = {
  width: "300px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "50px",
  margin: "20px auto",
};
function D({lala}) {
  return (
    <div style={dStyles}>
        <h2>D component</h2>
        <E hmm={lala}/>
    </div>
  )
}

export default D