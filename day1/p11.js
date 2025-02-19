const fs = require("fs");
// const fs=require("fs/promises");
const write= async()=>{
        const data= "I am new Data" 
         fs.writeFile("./data.txt",data,(err)=>{
            if(err) throw err;
            else{
                console.log("file ipdated sucessfully");
            }
         });
        // console.log(data)
};

write();