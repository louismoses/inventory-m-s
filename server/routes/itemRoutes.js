const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/items", itemController.items);
router.get("/new-item", itemController.addItemForm);
router.post("/items/create-item", itemController.addItem);

module.exports = router;
