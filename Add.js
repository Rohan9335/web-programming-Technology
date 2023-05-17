import "./props.css"
       
       export default function Add(props){

            let a = props.num1
            let b = props.num2
            let str = props.str
            // let {x,y}= props.point


            if(props.func!= undefined)
                props.func()
            
            
            let sum = a+b

            return <div class="bordered">
                addition = {sum} 
                <p>{str}</p>
                <p> Array = {props.arr} {typeof(props.arr)} </p>
                <p>  {props.point.x} </p>
                <p>{props.flag?"hi":"bye"}</p>

              
            </div>

        }