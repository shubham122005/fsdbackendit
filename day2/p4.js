const http=require("http");
const fs=require('fs/promises');
const server =http.createServer( async(req,res)=>{
    res.writeHead(200,{"content-Type": 'text/html'});
    const data =await fs.readFile('./index.html','utf-8');


    res.end(data);
});


server.listen(9000,()=>{
    console.log("server is runnig on port 3000");
});