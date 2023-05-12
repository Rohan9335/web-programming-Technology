

import express, { Router } from "express";

let app = express()

let planetsrouter= Router()
export default planetsrouter

let planet = ["earth","mars","pluto","jupiter"]


planetsrouter.get("/", (req,res)=>{
    res.send("Hi we are on planet Earth")
})

planetsrouter.get("/all",(req,res)=>{
    res.send(planet)
})

planetsrouter.post("/add/:planetname",(req,res)=>{
    planet.push(req.params.planetname)
    res.send(` Planet Added succesfully : ${planet} `)
    
})

