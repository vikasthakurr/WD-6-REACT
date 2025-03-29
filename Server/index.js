import http from "http";
// import fs from "fs";

const myServer = http.createServer((req, res) => {
  console.log("new request received",req.headers);
  res.end("hello from server ");
});

myServer.listen(8000, () => {
  console.log("Server is running on port 8000");
});
