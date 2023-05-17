import { component } from "react";

    export default class Fromviewtocompclass extends component
    {
            constructor()
            {
                super ()
                this.selectodstate =""
                this.handler1 = this.handler1.bind(this)
            }

            handler1(e)
            {
                this.selectodstate = e.target.value
                console.log(this.selectodstate)
            }


            render()
            {
               return <div>
                    <select onChange={this.handler1}>
                        <option value="MH">maharashtra</option>
                        <option value="kA">Karnataka</option>
                        <option value="TN">TamilNadu</option>

                    </select>
                </div>
            }
    }