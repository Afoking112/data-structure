//CICD
//continous integration & continous deployment
// import express from "express"
const express = require("express");
const port = 5001
const app = express()

app.get("/",(req,res)=>{
   res.send("Hello, CI/CD Students!")
   res.end()
})


module.exports = app
// ssh username@ip_address -p 21098