const db  = require("../models"),
      jwt = require("jsonwebtoken");


exports.signIn = ()=>{};

exports.signUp = async (req, res, next)=>{
    try{
        let user = await db.user.create(req.body);
        let { id, username, profileImagerl } = user;
        let token = jwt.sign({
            id,
            username,
            profileImagerl
        },process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            profileImagerl,
            token
        });
    }catch(err){
        if(err.code === 11000){
            err.message = "username and/or password already taken!";
        }
        return next({
            status: 400,
            error: err.message
        });
    }
};