const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Token missing, authorization denied"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            res.status(403).json({success:false,message:"Login Again"});
        }
        req.user = decoded
        next();
    }catch(err){
        res.status(401).json({success:false,message:"Login Again"})
    }
    
}

module.exports = verifyToken;