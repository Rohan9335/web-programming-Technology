          import { Component } from "react";

          export default class PropsPractice extends Component
          {
                constructor(props)
                {
                    super()

                     this.n1 = props.num1
                     this.arr1= props.arr
                     this.n = props.point.name
                     this.sn = props.point.sname
                }

                render()
                {
                    return <div align="middle">
                        <pre>
                        <p>number = {this.n1} </p>
                        <p>arr = {this.arr1}</p>
                        <p>object = {this.n}</p>
                        </pre>

                    </div>
                }


          }     