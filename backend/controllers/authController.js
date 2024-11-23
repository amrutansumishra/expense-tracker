const userModel = require('../models/userModel');
const otpModel = require('../models/otpModel');
const jwt = require('jsonwebtoken');
const {OAuth2Client} =require('google-auth-library');
const jwtKey = process.env.JWT_SECRET;
const GOOLE_CLIENT_ID = process.env.GOOGLE_CLINT_ID;
const sendMail  = require('../services/mail');

exports.loginUser = async (req,res) =>{
    try{
        const user = await userModel.findOne({email:req.body.email,password:req.body.password})
        if(!user){
           return res.status(401).json({
                success:false,
                message:"Wrong credentials"
            })
        }
        const {password,createdAt,updatedAt,...data} = user._doc;
        jwt.sign({data}, jwtKey,{expiresIn:"2h"},(err,token)=>{
            if(err){
                res.status(401).json('Something went wrong, please try again after some time.');
            }
            res.status(200).json({success:true,...data,token})
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong, please try again after some time."
        })
    }
}


exports.googleLogin = async (req,res) =>{
    const client = new OAuth2Client(GOOLE_CLIENT_ID);
    const verifyGoogleToken = async(token)=>{
        const ticket = await client.verifyIdToken({
            idToken:token,
            audience:GOOLE_CLIENT_ID
        })
        const payload = ticket.getPayload();
        return payload;
    }
    try{
        const {token} = req.body;
        console.log(token)
        const googleResponse = await verifyGoogleToken(token);
        console.log(googleResponse)
        const {name,email} = googleResponse;
        if(googleResponse.email_verified){
            const user = await userModel.findOne({email})
            if(!user){
                const add_user= new userModel({name,email})
                const result = await add_user.save();
                console.log(result)
                const {password,createdAt,updatedAt,...data} = result._doc;
                console.log(data,"data")
                jwt.sign({data}, jwtKey,{expiresIn:"2h"},(err,token)=>{
                    if(err){
                        res.status(401).json('Something went wrong, please try again after some time.');
                    }
                    res.status(200).json({success:true,email,name,token})
                })                
            }else{
                const {password,createdAt,updatedAt,...data} = user._doc;  
                console.log(data,"data")
                jwt.sign({data}, jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    res.status(401).json('Something went wrong, please try again after some time.');
                }
                res.status(200).json({success:true,email,name,token})
            })
            }
            
        }else{
            res.status(401).json('Something went wrong, please try again after some time.');
        }        
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong, please try again after some time."
    })
    }
}

exports.registerUser = async (req,res) =>{
    try{
        const {name,email,password,otp} = req.body
        console.log(req.body)
        const Otpresult = await otpModel.find({email,otp});
        if(Otpresult){
            const user = new userModel({name,email,password})
            const result = await user.save();
            if(result){
                const {password,createdAt,updatedAt,...data} = user._doc;  
                console.log(data,"data")
                const {name,email} = data;
                jwt.sign({data}, jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    res.status(401).json('Something went wrong, please try again after some time.');
                }
                res.status(201).json({success:true,email,name,token})
            })
            }            
        }else{
            res.status(401).json({
                success:false,
                message:"Wrong Otp."
            })  
        }
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong, please try again after some time."
        })
    }
}

exports.logoutUser = async (req,res) =>{
    try{
        const user = new userModel(req.body)
        console.log(req.body)
        const result = await user.save();
        if(result){
            res.status(201).json({
                success:true,
                user
            })
        }
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong, please try again after some time."
    })
    }
}

exports.editUser= async (req,res)=>{
    try{
        let user = await userModel.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
          })
        res.status(200).json(user);
    }catch(error){
        res.status(500).json(error)
    }
  
}

exports.verifyOtp = async (req,res) =>{
    try{
        const result = await otpModel.find({email:req.body.email,otp:req.body.otp});
        if(result){
            res.status(201).json({
                success:true,
                user
            })
        }
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong, please try again after some time."
    })
    }
}

exports.sendOtp = async (req,res) =>{
    try{
        const {email} = req.body;
        const otp = Math.floor(100000+Math.random()*900000)
        const user = new otpModel({email,otp})
        const result = await user.save();
        const subject = "OTP for verification Expense Tracker";
        const body = `<h3>Please find the Otp Below</h3><p>${otp}</p>`;
        const mailStatus = await sendMail(subject,body,email)
        if(result && mailStatus){
            res.status(201).json({
                success:true,
                user
            })
        }
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong, please try again after some time."
    })
    }
}