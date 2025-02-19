const fs=require('fs');
const data=fs.readFileSync("./data.txt","utf-8");
console.log("i m reading");
console.log(data);