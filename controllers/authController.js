const jwt=require("jsonwebtoken");

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1h"});
};

exports.registerUser=aync=(req,res)=>{};
exports.loginUser=aync=(req,res)=>{};

exports.getUserInfo=aync=(req,res)=>{};

