import fs from "fs";

//write into stream...
const writeStream = fs.createWriteStream("./example.txt");
writeStream.write("this is line one of the data.... \n");
writeStream.end("final line.....");

//read from stream...

const readStream = fs.createReadStream("./example.txt", "utf8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});
