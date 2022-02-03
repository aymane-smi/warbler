require("dotenv").config();
const express      = require("express"),
      app          = express(),
      cors         = require("cors"),
      bodyParser   = require("body-parser"),
      errorHandler = require("./handlers/errorHandler"),
      authRoutes   = require("./routes/auth");

//server configuration

app.use(cors());
app.use(bodyParser.json());

//default port of the server      
const PORT = 8081;

//errors handlers

app.use(function(req, res, next){
    // let err = new Error("new Error");
    // err.status = 404;
    // next(err);
    next();
});


app.use(errorHandler);


//calling ath routers

app.use("/api/auth", authRoutes);

//server start
app.listen(PORT, ()=>{
    console.log(`server starting at port ${PORT}`);
});