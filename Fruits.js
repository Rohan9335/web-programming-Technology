import { Component } from "react";
import "./st.css"

    export default class Fruits extends Component
    {
        constructor()
        {
            super()
           this.state={arr:["mango","banana"]} 
        }

         Handler (f)
        {
            let f1 = f
            console.log(f1)
            let temp = [...this.state.arr]
            console.log(this.state)
            temp.push(f1)

            this.setState({arr:temp})
            
        }
        olist=()=>{
            // let arrelement=[]
            // for(let i=0; i<this.state.arr.length;i++)
            // {
            //     let x = <li> {this.state.arr[i]} </li>
            //     arrelement.push(x)
            // }

            // return arrelement

            return this.state.arr.map((ele,index)=> {return <li> {index+1} { ele} </li> }) 
        }
        
        render()
        {
            return <div className="outline">
                FRUit NAme: <input type="text" onBlur={(e)=>{this.Handler(e.target.value)}}></input>
                    <ol>
                       { this.olist()}
                    </ol>
            </div>
        }
    }