const mongoose = require("mongoose"),
      bcrypt   = require("bcrypt");
      
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    profileImageUrl: String,
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]
});

userSchema.pre("save", async function(next){
    try{
        if(!this.isModified("password"))
            return next();
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    }catch(err){
        return next(err);
    }
});


userSchema.methods.camparePassword = async function(oldPassword, next){
    try{
        let isMatch = await bcrypt.compare(oldPassword, this.password);
        return isMatch;
    }catch(err){
        next(err);
    }
};
const user = mongoose.model("User", userSchema);

module.exports = user;