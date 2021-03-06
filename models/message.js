const mongoose = require("mongoose"),
      user    = require("./user");

const messageSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
        maxlength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true
  });

messageSchema.pre("remove", async function(next){
    try{
        let User = await user.findById(this.user._id);
        console.log("user:",User);
        User.messages.remove(this.id);
        await User.save();
        return next();
    }catch(err){
        return next(err.message);
    }
});

module.exports = mongoose.model("Message", messageSchema);