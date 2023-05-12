import express from "express";
import planetsrouter from "./planet.js";
import guest from "./guest.js";

let app = express()

app.use("/planets",planetsrouter)

app.use("/atithi",guest)

app.listen(121 ,()=>{

    console.log("the server runs on port number 121")

})




