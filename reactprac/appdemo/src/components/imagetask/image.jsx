import "./image.css";
import { useState } from "react";
function ImgComp(){
  let[url,setUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s");
   let[title,setTitle]=useState("React");
  const changetoangular=()=>{
    setTitle("Angular")
       setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNg06p6VGqYMJA1HCbOgfkKLV8oQcE4sOkg&s")
    
    }
    const changetoreact=()=>{
       setTitle("React")
        setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s")
    }
    return(
<div id="imagecomp">
    <h1>{title}</h1>
    <img src={url} width="500" height="300"/>
    <br/>
    <br/>
    <button onClick={changetoreact}>react</button>
     <button onClick={changetoangular}>angular</button>
</div>

    );
}
export default ImgComp;