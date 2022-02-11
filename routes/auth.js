const express  = require("express"),
      router   = express.Router(),
      {signUp} = require("../handlers/auth");

router.post("/signup", signUp);

module.exports = router;