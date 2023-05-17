        import { useState } from "react";

        export default function Hw01_casehandler(e)
        {
            let [str , setstr] = useState("")
            function TexHandler(e){
                
                setstr(e.target.value)
            }



            function choices(choice)
            {

                switch(choice)
                {
                    case "up": setstr(str.toUpperCase()); break;
                    case "lc": setstr(str.toLowerCase()); break;
                    case "tc": setstr(str.charAt(0).toUpperCase().concat(str.substring(1).toLowerCase()));break;
                    case "default": break;

                }


            }

            return <div>
            
               
                Enter a String<input type="text" onBlur={TexHandler}></input>
                <br></br>
                to Uppercase:<input type="radio" name="x" value={"up"} onChange={(e)=>{ choices(e.target.value)}}></input>
                <br></br>
                to lowerCase:<input type="radio" name="x" value={"lc"} onChange={(e)=>{choices(e.target.value)}}></input>
                <br></br>
                to Title Case:<input type="radio" name="x" value={"tc"} onChange={(e)=>{choices(e.target.value)}}></input>
            
                <p>Result = {str}</p>
            
               </div>
        }