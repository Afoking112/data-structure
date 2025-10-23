const express = require("express");
const port =5003 || process.env.port
const app = express()

app.get("/",(req,res)=>{
   res.json([
    {object:'1'},
    {object:'1'},
    {object:'1'},
    {object:'1'},
    {object:'1'}
   ])
   res.end()
})

app.listen(port,()=>{
    console.log(`Working on port ${port}`);
    
})