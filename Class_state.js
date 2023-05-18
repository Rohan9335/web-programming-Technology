    import { useState } from "react";
    import { Component } from "react";

    export default class Class_state extends Component
    {
        constructor()
        {
            super()
            this.num = 0
            this.state= ({sqr:0})
        }
        find=(e)=>{

            this.num = e.target.value
            let s = this.num*this.num
            this.setState({sqr:s})

        }
        

        render()
        {
            return <div style={ {backgroundColor:"red" }}>
                NUMBER: <input type="number" onBlur={this.find}></input>
                <br></br>
                <p>RESULT: {this.state.sqr}</p>
            </div>
        }



    }