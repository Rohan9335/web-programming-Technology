import { useState } from "react"

    export default function Hw04(props)
    {

        let text=''
        let [valid,v]=useState('checking...')  // rerendering

           function handler1(e){
                 text=e.target.value
                // console.log(props.aar1.length)

                for(var i=0 ; i<props.arr1.length;i++)
                {
                        if(text == props.arr1[i].uname){
                                console.log("v")
                                         v('Valid User')
                                }
                 }
           }

            return <div>
                <input type="text"onBlur={handler1}></input>
                <p>{valid}</p>
            </div>

    }