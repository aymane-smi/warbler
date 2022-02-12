require("dotenv").config();
const express                            = require("express"),
      app                                = express(),
      cors                               = require("cors"),
      bodyParser                         = require("body-parser"),
      errorHandler                       = require("./handlers/errorHandler"),
      authRoutes                         = require("./routes/auth"),
      messageRoutes                      = require("./routes/message"),
      {loginRequired, ensureCorrectUser} = require("./middleware/auth");

//server configuration

app.use(cors());
app.use(bodyParser.json());

//default port of the server      
const PORT = 8081;

app.use(errorHandler);

//calling all routers

app.use("/api/auth", authRoutes);
app.use("/api/users/:id/message", 
                                loginRequired,
                                ensureCorrectUser,
                                messageRoutes);

//errors handlers

app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

//server start
app.listen(PORT, ()=>{
    console.log(`server starting at port ${PORT}`);
});