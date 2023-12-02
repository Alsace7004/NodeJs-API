
const fsPromises = require('fs').promises;
const path = require('path')

const fileOps = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data)
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
        
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),'Nice to meet you');
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\n  Nice to meet you');
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));
        const newdata = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8');
        console.log(newdata)
    }catch(err){
        console.log(err)
    }
}
fileOps()

/* fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data)
    //console.log(data.toString())
}) */

/* console.log('hello...')

fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you',(err)=>{
    if (err) throw err;
    console.log('write complete')
    //console.log(data.toString())

    fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\n  yes it is ',(err)=>{
        if (err) throw err;
        console.log('Append complete')
        //console.log(data.toString())
    })
})  */



//exit on uncaught error
process.on('uncaughtException',err=>{
    console.log(`There was an error : ${err}`)
    process.exit(1);
})