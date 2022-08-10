const { Router } = require("express");
const router = Router();

router.get("/api/v1/users", (req, res) => {
  res.send("Hello User!");
});

module.exports = router;
