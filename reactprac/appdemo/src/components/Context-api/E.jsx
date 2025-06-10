import React from "react";
import { useContext } from "react";
import FsContext from "./context";
function E() {
     let cs=  useContext(FsContext);
  return (
 
    <div style={{ padding: "10px" }}>
      <h2>E Component</h2>

      <br />
      <h4 style={{color:"green"}}>Data:{cs}</h4>
    </div>
  );
}

export default E;