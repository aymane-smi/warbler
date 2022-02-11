const express  = require("express"),
      router   = express.Router(),
      {signUp, signIn} = require("../handlers/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;