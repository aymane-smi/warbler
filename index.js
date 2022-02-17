require("dotenv").config();
const express                            = require("express"),
      app                                = express(),
      cors                               = require("cors"),
      bodyParser                         = require("body-parser"),
      errorHandler                       = require("./handlers/errorHandler"),
      authRoutes                         = require("./routes/auth"),
      messageRoutes                      = require("./routes/message"),
      db                                 = require("./models"),
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
app.get("/api/messages", loginRequired, async function(req, res, next){
  try {
    let messages = await db.message.find().sort({createdAt: "desc"}).populate("user", {username: true, profileImageUrl: true});
    return res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
});

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