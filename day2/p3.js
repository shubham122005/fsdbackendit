const http=require("http");
const server =http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type": 'text/html'});
    res.end(`<h1>hello worlds</h1>`);
});


server.listen(9000,()=>{
    console.log("server is runnig on port 3000");
});