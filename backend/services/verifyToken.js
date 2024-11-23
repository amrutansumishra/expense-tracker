const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Token missing, authorization denied"});
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            res.status(403).json({message:"token expired"});
        }
        req.user = user;
        next();
    })
}

module.exports = verifyToken;