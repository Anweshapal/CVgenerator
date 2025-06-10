import React from 'react'
const eStyles = {
  width: "300px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "50px",
  margin: "20px auto",
};
function E({hmm}) {
  return (
    <div style={eStyles}>
        <h2>E component</h2>
        <h5>Data :{hmm}</h5>
    </div>
  )
}

export default E