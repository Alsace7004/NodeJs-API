const fs = require('fs')

//if not exist, create it
if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err) throw err;
        console.log('Directory created')
    })
}
//if exist delete it
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err) throw err;
        console.log('Directory removed')
    })
}
