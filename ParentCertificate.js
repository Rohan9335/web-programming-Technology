import Graduate from "./Graduate";
import { useState } from "react";
import Undergraduate from "./Undergraduate";
import Postgraduate from "./Postgraduate";

export default function ParentCertificate()
{
    let [choice , setit] = useState("")
let obj =  {backgroundColor:"yellow", textAlign:"center", borderStyle:"solid", borderWidth:"10px"}



    return <div style={obj}>
       Name : <input type="text"></input>  <br></br>
       Email : <input type="text"></input>
        <select onChange={(e)=>{setit(e.target.value)}} >
        <option value="ug">Undergraduate </option>
        <option value="g">Graduate </option>
        <option value="pg">Postgraduate </option>

       </select>
{choice==="g"? <Graduate></Graduate>:""}
{choice==="ug"?<Undergraduate></Undergraduate>:""}
{choice==="pg"?<Postgraduate></Postgraduate>:""}
    </div>
}