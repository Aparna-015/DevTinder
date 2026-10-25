console.log("hii");
const express = require("express");
const app = express();
const port = 3000;



// app.use("/hello", (req, res) => {
//   console.log("------");
//   res.send("hellooooo");
// });


app.get("/xyz", (req, res) => {
  res.send(".....!");
  console.log("xyz! get");
});

app.post("/xyz", (req, res) => {
  res.send("xyz! posted");
  console.log("xyz! post");
});


app.get("/user",(req,res)=>{
  res.send({firstNmae:"John",lastName:"Doe"},{firstNmae:"nam",lastName:"Doe"},{firstNmae:"John",lastName:"Doe"});

})
app.post("/user",(req,res)=>{
  res.send("post fully works");
} );

app.delete("/user",(req,res)=>{
  res.send("deleted");
});


app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
