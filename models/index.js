const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
    keepAlive: true,
    // useMongoClient: true
    useNewUrlParser: true
});

module.exports.user = require("./user");