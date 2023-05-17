import { Component } from "react";

export default class Interpolation extends Component{

    render(){    
    let uname = " sauryaa"
    let sname = "pagal"

     return <div> Username : {uname.toUpperCase() + " "+ sname.toUpperCase()} {2*3*5+8} </div>
}}