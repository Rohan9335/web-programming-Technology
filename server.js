import  express  from "express";
import path from "path"

let app = express()
app.set('views', './views');
app.set('view engine', 'hbs');


app.get("/" ,(req,res)=>{

    res.sendFile("C:\\Users\\IET\\Desktop\\rohan\\java script\\Multipage_Appn\\welcome.html")

})

app.get("/verify",(req,res)=>{
    let n = req.query.uname
    let p = req.query.pwd

 

    res.render("welcome", {username:n})

})
app.get("/calculator",(req,res)=>{

    res.render("calc")

})

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/docalculation",(req,res)=>{
    let n1 = req.body.num1
    let n2 = req.body.num2
    
    let sum=parseInt(n1)+parseInt(n2)
    res.render("calc",{result:sum})
})


app.get("/maths",(req,res)=>{

    app.render("mathstable")
})

app.get("/generatetable",(req,res)=>{

    let n1 = req.body.num1
    let arr=[]
    for(let i=1; i<=10; i++)
    {
        arr[i] = `${n1}*${i}=${n1*i}`
        
    }
    res.render("mathstable",{rowdata:arr})
})





app.listen(2000 ,()=>{
    console.log("listening to port 2000")
})





