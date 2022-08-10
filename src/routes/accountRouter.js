const { Router } = require("express");
const router = Router();
const AccountController = require("../controllers/accountController");

router.post("/api/v1/accounts", AccountController.create);

module.exports = router;
