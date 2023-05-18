import { useState } from "react"
import Class_state from "./Class_state"
import Fruits from "./Fruits"
import Header from "./Header"
import Parent_component from "./Parent_component"
import PropsPractice from "./PropsPractice"
import ParentCertificate from "./ParentCertificate"


export default function App17()
{

 let obj = {
    name: "rohan",
    sname: "patil"
 }
  let [flag,setFlag] = useState(false)


return <div>
        {flag? "" : <Header></Header>}
        Hide header <input type="checkbox" onChange={(e)=>{setFlag(e.target.checked)}}></input>
        {/* <PropsPractice num1 = {10}></PropsPractice> */}
        {/* <PropsPractice arr= {[10,20,30]}></PropsPractice> */}
        {/* <PropsPractice point = {obj}></PropsPractice> */}
        {/* <Class_state></Class_state>
        <Parent_component></Parent_component>
        <Fruits></Fruits> */}
        <ParentCertificate></ParentCertificate>
        
        
</div>



}