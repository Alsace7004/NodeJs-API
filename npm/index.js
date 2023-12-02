const http = require('http');
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises;

const logEvents= require('./logEvents')
const EventEmitter = require('events')
class Emitter extends EventEmitter {}
//initialisse object
const myEmitter = new Emitter();
myEmitter.on('log',(msg,filename)=>logEvents(msg,filename));

const PORT  = process.env.PORT || 3500;

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)
    myEmitter.emit('log',`${req.url}\t${req.method}`,'reqLog.txt');
})

server.listen(PORT,()=>{
    console.log(`The server is up and running on ${PORT}`)
})


//add listener fo the log event
/*
 setTimeout(()=>{
    //Emit Event 
    myEmitter.emit('log','Log event emitted!!!');
},2000); */