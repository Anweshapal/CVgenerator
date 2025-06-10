import React from "react";
import { useContext } from "react";
import fscontext from "./context";
import E from "./E";
function D() {
     let io=  useContext(fscontext);
  return (
    <div style={{ padding: "10px" }}>
      <h2>D Component</h2>

      <br />
      <h4 style={{color:"green"}}>Data:{io}</h4>
      <hr/>
      <E/>
    </div>
  );
}

export default D;