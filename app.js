   import  Express,{json} from "express";

   const app = Express()
   app.set('views','./views');
   app.set('view engine','hbs');

   app.use(json());


   app.get("/ajax",(req,res)=>{
            // res.render('testajax')
            res.render('testajaxquery')
   })

   app.get("/message",(req,res)=>{

    res.send({message:"this is ajax message",sender:"Rohan"})
   })

   app.post("/square",(req,res)=>{

        let n = req.body.num
        let sqr = n*n
        res.send({sqr:sqr})
   })


   app.listen(5000,()=>{
        console.log("listning to port 5000")
   })



