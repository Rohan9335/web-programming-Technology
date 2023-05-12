import express, { Router } from "express";

let guest = Router()
let app = express()

export default guest
let name = "raj"

guest.get("/",(req,res)=>{

    res.send(`this is guest site of ${name}`)
})