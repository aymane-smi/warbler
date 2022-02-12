const express         = require("express"),
      router           = express.Router({mergeParams: true}),
      {createMessage} = require("../handlers/message");

router.route("/").post(createMessage);

module.exports = router;