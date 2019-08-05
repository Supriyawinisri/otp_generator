const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const eApis = require('./apis/email.apis').server;

server.use(parser.json());

server.use(cors());

server.get('/status',(req,res)=>{
    res.end("status");
})

server.use("/register",eApis);

server.listen(1269,()=>{
    console.log('Server started at 1269');
});