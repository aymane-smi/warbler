const mongoose = require("mongoose"),
      {user}     = require("./user");

const messageSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
        maxlength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

messageSchema.pre("remove", async function(next){
    try{
        let user = await user.findById(this.user._id);
        user.messages.remove(this.id);
        await user.save();
        return next();
    }catch(err){
        return next(err.message);
    }
});

module.exports = mongoose.model("Message", messageSchema);