const utils = {
    smtp : {
        provider : 'gmail',
        address :  'ibmtechtraining007@gmail.com',
        password : 'India@786'
    }
}

const setContentHeader = (res)=>{
    res.setHeader('content-type','application/json');
};

module.exports.setContentHeader = setContentHeader;
module.exports.utils = utils;
