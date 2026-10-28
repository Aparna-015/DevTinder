console.log("hii");
const express = require("express");
const app = express();
const port = 3000;
const connectDb = require("./config/database");

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "John",
    lastName: "Doe",
    email: "John@example.com",
    password: "password123",
  });
  await user.save();
  
  res.send("User created successfully");
});

// *******************QUERY PARAMETERS*****************

// app.get("/search", (req, res) => {
//   console.log(req.query.keyword);
//   console.log(req.query.sort);

//   res.send(`Searching for: ${req.query.keyword}, Sorted by: ${req.query.sort}`);
// });

connectDb()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log(`server is running on port 3000`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
