const fs=require('fs');
fs.mkdir("mydir",(err)=>{
    if (err){
        console.log("error detection",err);
        return
    }else{
        console.log("directory created successfully");
    }
});