import React from "react";
import B from "./B";
import FsContext from "./context";
function A() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>A Component</h2>
      <br />
      <button>Submit</button>
      <br />
      <hr/>
      <FsContext.Provider value={100}>
  <B />
</FsContext.Provider>

      
    </div>
  );
}

export default A;