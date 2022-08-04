const express = require("express");
const controller = require("../controller/bankController");
const router = express.Router();

//Showing all banks
router.get("/", controller.bankList);

module.exports = router;
