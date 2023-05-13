        import  express  from "express";

        import guestrouter from "./guestrouter_as.js";
        let app = express()

        app.use("/host",guestrouter)
        import productrouter from "./productrouter.js";
        app.use("/product",productrouter)




        app.listen(1000,()=>{
            console.log("listning to port 1000")
        })


