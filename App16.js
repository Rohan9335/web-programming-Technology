// import Add from "./Add"
// import Fromviewtocomp from "./Fromviewtocomp"
// import Fromviewtocompclass from "./Fromviewtocompclass"
import Hw01 from "./Hw01"
import Hw01_casehandler from "./Hw01_casehandler"
import Hw04 from "./Hw04"
// import Propspra from "./Propspra"

import SquareF from "./SquareF"
//import Add from "./Add"
// import Test from "./Test"


   export default function App16(){
      let arr = 
      [
          {uname:"xxx" , pwd:"123"},
          {uname:"abc" , pwd:"456"},
          {uname:"def" , pwd:"789"}       
      ]

//     let arr = [1,2,3]

//     function func(){
//         console.log("fUNCTION IS CALLED")
//     }
//     let obj = {x :12,y:34 }

    return <div >
  {/* //   <Add num1={2} num2={3} str="react"></Add>
  //   <Add arr={arr}  func={func}></Add>
  //   <Add point={obj}> </Add>
  //     <Add flag="true"></Add>
 */}

    {/* //<Fromviewtocomp></Fromviewtocomp>      <Test></Test> */}
        {/* <Fromviewtocompclass></Fromviewtocompclass> */}
    
      {/* <SquareF></SquareF> */}
      {/* <Hw01></Hw01> */}
      {/* <Hw01_casehandler></Hw01_casehandler> */}
       {/* <Propspra></Propspra> */}
      <Hw04 arr1={arr}></Hw04>
    
    </div>

}