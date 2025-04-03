import express from "express";
import fs from "fs";

const users = JSON.parse(fs.readFileSync("./MOCK_DATA.json", "utf8"));

const app = express(); // express app

const PORT = 8000;

//middleware

app.use(express.urlencoded({ extended: false }));

//middleware 1

// app.use((req,res,next)=>{
//   console.log("middleware 1 called");
//   next();
// })

// app.use((req,res,next)=>{
//   console.log("middleware 2 called");
//   next();
// })

// app.use((req, res, next) => {
//   //I can make something change in request and response here and it will be accessible in all middlewares
//   req.myName = "Vikas thakur";
//   console.log("middleware 1 called", req.myName);
//   //   return res.json({ status: "hi again from middleware" });
//   next();
// });

// //middleware 2 called
// app.use((req, res, next) => {
//   console.log("middleware 2 called", req.myName);
//   // return res.end("hey")
//   // return res.json({ status: "hi again from middleware" });
//   next();
// });

//to get all the user data...
app.get("/api/users", (req, res) => {
  console.log("i am in get route", req.myName);
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("body", body);
  return res.json({ status: "pending" });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
