const db     = require("../models"),
      jwt    = require("jsonwebtoken");


exports.signIn = async(req, res, next)=>{
    try{
        let user = await db.user.findOne({email: req.body.email});
        let isMatch = await user.camparePassword(req.body.password);
        if(isMatch){
            const {id, username, profileImageUrl} = user;
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            }, process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token
            });
        }else{
            console.log("inside else");
            return next(res.status(400).json({
                err: "Invalid email/password"
            }));
        }
    }catch(err){
        console.log("inside the catch");
        return next(res.status(400).json({
            err: err.message
        }));
    }
};

exports.signUp = async (req, res, next)=>{
    try{
        let user = await db.user.create(req.body);
        let { id, username, profileImageUrl } = user;
        let token = jwt.sign({
            id,
            username,
            profileImageUrl
        },process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
    }catch(err){
        let msg = err.message;
        console.log(msg);
        if(err.code === 11000){
            err.message = "username and/or email already taken!";
        }
        return next(res.status(400).json({
            err: err.message
        }));
    }
};