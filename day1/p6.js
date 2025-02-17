const fs=require('fs');


// data="hellooo world";
const datadel=()=>{

    fs.unlink("./mydir/data.txt",(err)=>{if(err)throw err});
}
datadel();