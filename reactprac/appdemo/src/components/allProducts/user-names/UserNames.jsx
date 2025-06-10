import {useState} from 'react'

function UserNames() {
    let[names,SetNames]=useState([ "Rohan","Aish","Vaish","Anwesha"]);
  return (
    <div style={{padding:"50px"}}>
        <h2>User Names</h2>
        <ul>
           {
            names.map(function(){

               return <li>{names}</li>



            })
           }
        </ul>
    </div>
  )
}

export default UserNames