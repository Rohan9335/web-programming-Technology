import  express, { Router }  from "express";

let productrouter = Router()
export default  
productrouter.use(express.json());

let product =[{
  "id" : 1, 
  "pname" :"mouse",
  "pcost" :250,
  "units" :2 
}]

productrouter.post("/add",(req,res)=>{
     const input = req.body
    product.push(input)
    res.send("added succesfully")

     
})

productrouter.get("/",(req,res)=>{

    res.send(product)
})


productrouter.get("/showid",(req,res)=>{
    let pid1 = req.query.pid
    let flag = false
    
        for(let i=0; i<product.length; i++){

    
            if(product[i].id == pid1 ){

                flag =true
               res.send(product[i])           
                           
            }
           
            
    }

    if(!flag){
        res.send("Invalid id")

    }

})


productrouter.get("/ind" ,(req,res)=>{

    res.send(product.map((p,index) => index))
    let l = product.length
    res.send(l)


})

productrouter.put("/cgcost/:pid/:cost",(req,res)=>{

    let c = req.params.cost
    let pid1 = req.params.pid
    let flag = false
    for(let i=0; i<product.length; i++)
    {
        if(product[i].id == pid1 )
        {
            product[i].pcost= c
            flag =true
        
        }

    }
        if(!flag){
            res.send(" enter valid id")
        }
})

    // productrouter.delete("/delete",(req,res)=>{


    // })







