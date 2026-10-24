console.log("hii");
const express = require("express");
const app = express();
const port = 3000;      

app.use("/",(req,res)=>{
    console.log("hii");
    res.send("Hello from the server!");

})

app.use("/hello",(req,res)=>{
    req.send("hellooooooooooo")


})

app.listen(3000,()=>{
    console.log(`server is running on port 3000`);
})