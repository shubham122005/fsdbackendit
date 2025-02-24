const http=require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    if(req.url=='/home'){
        res.end('<h1>Home page </h1>');

    }
    else if(req.url=='/about'){
        res.end('<h1>About page </h1>');

    }
    else if(req.url=='/contact'){
        res.end('<h1>Contact page </h1>');

    }
    else{
        
            res.end('<h1>Page not found</h1>');
    
        

    }
});
server.listen(9000,()=>{
    console.log("server is runnig on port 9000");
});