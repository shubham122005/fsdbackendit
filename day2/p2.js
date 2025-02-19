const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plan');
    res.end('hello world');
});


server.listen(9000,()=>{
    console.log("server runnigon  port 3000");
});