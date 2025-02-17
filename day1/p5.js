const fs=require('fs');
 
data ="i am new dataaa !!";
        fs.writeFile('./data.txt',data,(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }
         });
