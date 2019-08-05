const otp = require('otp-generator');
const emailnodemailer = require('./email.nodemailer').Email;
const email = new emailnodemailer();
let otp_pass = '' , minutes = '';
class emailService{
    generateotp(){
        otp_pass =  otp.generate(4,{specialChars: false , alphabets : false , upperCase : false});
        console.log(otp_pass);
        minutes =  this.getdatetime() + 60000;
        return otp_pass;
    }

    getdatetime(){
        let date = new Date();
        let current_time = date.getTime();
        return current_time;
    }

    sendemail(data){
        let userObj ={
            subject : "One Time Password - Generator",
            body : `<div>Your OTP to access the link is <b>${this.generateotp()}.</b></div>
                    <div>OTP expires in 10 minutes.</div>`,
            from : null,
            to : data
        }
        email.emailWithAttachment(userObj);
    }

    otpverify(otp,time){
        if(time<=minutes)
        {
            if(otp_pass==otp){
                console.log("Enter your password");
            }
            else{
                console.log("OTP incorrect!!!")
            }
        }
        else{
            console.log("OTP has been expired")
        }
    }

    store(email,password){
        console.log(email,password)
        
    }

}

module.exports = {
    emailService
}