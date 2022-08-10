const { Router } = require("express");
const router = Router();

router.get("/api/v1", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
