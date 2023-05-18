import "./st.css"
    import { useState } from "react"
import Child_component from "./Child_component"

    export default function Parent_component()
    {
        let [n1 , setn1] = useState(0)
        let [n2 , setn2] = useState(0)
        let [res , setres] = useState(0)


        function result(r)
        {
            setres(r)
        }



        return <div className="outline">
            NUM1:<input type="number" id="n1" onBlur={(e)=>{setn1(e.target.value)}}></input>
            <br></br>
            NUM2:<input type="number" id="n2" onBlur={(e)=>{setn2(e.target.value)}}></input>
            <br></br>
            <Child_component num1 = {parseInt(n1)} num2 = {parseInt(n2) } fun = {result}></Child_component>
            <br></br>
            <p>result={res}</p>
        </div>
    }