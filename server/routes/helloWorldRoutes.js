const express = require("express");
const router = express.Router();
const helloWorldController = require("../controllers/helloWorldController");

router.get("/", helloWorldController.helloWorld);

module.exports = router;
