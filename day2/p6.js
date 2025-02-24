const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});

    let data ={
        name:"John doesNotMatch",
        age:30
    }


    if(req.url==="/getdata"&& req.method==='GET'){
       res.end(JSON.stringify(data));
    }
    else if(res.url==="/setdata"&& req.method==='POST' ){
        res.end("data recieved");
    }
})
server.listen(9000,()=>{
    console.log("server is runnig on port 9000");
});
