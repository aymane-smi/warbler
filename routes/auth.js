const express  = require("express"),
      router   = express.Router(),
      {signUp} = require("../handlers/auth");

router.post("/signUp", signUp);

module.exports = router;