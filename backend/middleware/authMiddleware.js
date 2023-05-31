const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler")

const protect = expressAsyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];

            // Decodes Token Id
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            
            req.user = await User.findById(decoded.id).select("-password");

            next();
        }catch(err){
            res.status(401);
            throw new Error("Not authorized, token failed")
        }
    }
    
    if(!token){
        res.status(401);
        throw new Error("Not authorized, No token")
    }
})

module.exports = { protect };