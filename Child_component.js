
      export default  function Child_component(props)
        {
            let n1 = props.num1
            let n2 = props.num2
            let f1 = props.fun

            function Handler(choice)
            {
                switch(choice)
                {
                    case "add": let res = n1 + n2;
                                f1(res)
                    break;

                    case "power": let res1 = Math.pow(n1,n2)
                                f1(res1)
                    break;    
                    
                    case "cl": let res3= ""
                                f1(res3)
                    break;
                }

            }

            return <div>
                <select onChange={(e)=>{Handler(e.target.value)}}>
                    <option value="add">  Add   </option>
                    <option value="power">  Power  </option>
                    <option value="cl"> Clear  </option>
                </select>


            </div>
        }