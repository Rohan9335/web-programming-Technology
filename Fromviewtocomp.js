

            export default function Fromviewtocomp()
            {
                let textvalue = ""

                    function texthandler(event)
                    {
                            textvalue= event.target.value
                            console.log("You Entered =>",textvalue)


                    }

                    function btnhandler()
                    {
                        console.log(textvalue.toUpperCase())
                    }

                    function colors_days(e)
                    {
                        let targetname = e.target.name
                        if( targetname == "colore"){
                            console.log("red","blue","white")
                        }
                        else{
                            console.log("monday","tuesday","sunday")
                        } 
                        
                    }



                    return <div>
                        <input type="text"  onBlur={texthandler}></input>
                        <br></br>
                        <button onClick={btnhandler}  >show on console</button>
                        <br></br>

                        <button name="colore" onClick={colors_days}>colorsssss</button>
                        <br></br>
                        <button name="days" onClick={colors_days}>daysss</button>

                    </div>



            }

