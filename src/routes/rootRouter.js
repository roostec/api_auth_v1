const { Router } = require("express");
const router = Router();

router.get("/api/v1", (req, res) => {
  const user_agent = req.headers["user-agent"];
  res.send("Hello World! you are using " + user_agent);
});

module.exports = router;
