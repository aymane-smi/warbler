require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.loginRequired = async function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(decoded)
                return next();
            else{
                return next(res.status(401).json({
                    err: "please login!"
                }));
            }
        });
    }catch(err){
        return next(res.status(401).json({
            err: "please login!"
        }));
    }
};

exports.ensureCorrectUser = async function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(decoded && decoded === req.params.id)
                return next();
            else
                return next(res.status(401).json({
                    err: "Unauthorized"
                }));
        });
    }catch(err){
        return next(res.status(401).json({
            err: "Unauthorized"
        }));
    }
};