
        import express ,{Router}  from "express";

        let guestrouter = Router()

        export default guestrouter


        let hostname = ["raj","rohan","sangram","basavraj"]

        guestrouter.get("/",(req,res)=>{
            return res.send(hostname)


        })

        guestrouter.get("/all",(req,res)=>{

            res.send(hostname.map((x,index)=> index+":"+x))
        })

        guestrouter.post("/addg",(req,res)=>{
            let gs = req.query.hname
            hostname.push(gs)

        })
        guestrouter.get("/count", (req,res)=>{

            res.send(hostname.length)
        })


            import bodyParse from 'body-parser'
            guestrouter.use(bodyParse.urlencoded({extended : true}))

        guestrouter.post("/change", (req,res)=>{
           let i = req.query.in
          let  nm = req.query.hname
          hostname[i] = nm
           //res.send(hostname)
        })       

        guestrouter.delete("/del",(req,res)=>
        {
            
            hostname.pop(req.query.in)
        })