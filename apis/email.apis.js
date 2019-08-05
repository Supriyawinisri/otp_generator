const server = require('express').Router();
const emailService = require('../services/email.service').emailService;
const eService = new emailService();

server.post('/',(req,res)=>{
    res.end('Your /register API is running successfully..')
})

server.post('/sendmail',(req,res)=>{
    eService.sendemail(req.body.email);
})

server.post('/otpverify',(req,res)=>{
    var time = eService.getdatetime();
    eService.otpverify(req.body.otp,time);
})

server.post('/passwordverifify',(req,res)=>{
    eService.store(req.body.email,req.body.password);
})

module.exports= {
    server
}