import http from "http";
// import fs from "fs";


const PORT = 8000;

const myServer = http.createServer((req, res) => {
  // console.log("new request received",req.headers);
  res.end("hello from server ");
  // console.log(req.headers);
  // console.log(req.url);
  // console.log(req.method);
  console.log(req.connection.remoteAddress);
  console.log(req.connection.localAddress);
});

myServer.listen(PORT, () => {
  console.log("Server is running on port 8000");
});

