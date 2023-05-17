import { useState } from "react"

        export default function Hw01()
        {
            let [userstr,setstr] = useState("")
            let [x,setx] = useState()

            function inputhandler(e){

                setstr(e.target.value)
            }

            function Ucase(e){
                if(e.target.checked){
                    setstr(userstr.toUpperCase());
                }else
                {
                    
                }    
                }

            function Lcase(e){
                if(e.target.checked){
                    setstr(userstr.toLocaleLowerCase())
                }
            }   
            
            function Tcase(e){
                if(e.target.checked){
                  setstr(userstr.charAt(0).toUpperCase().concat(userstr.substring(1).toLocaleLowerCase()))
                }

            }
            
            return <div>
               enter a string: <input type="text" onBlur={inputhandler}></input> 
               <br></br>
               to UPPER case: <input type="radio" name="s" onClick={Ucase}></input>
               <br></br>
               to lower case:<input type="radio" name="s" onClick={Lcase}></input>
               <br></br>
               to title case: <input type="radio" name="s" onClick={Tcase}></input>

               <p> result = {userstr}</p>
               <br></br>
            </div>

        }