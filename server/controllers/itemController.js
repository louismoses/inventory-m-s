const mongoose = require("mongoose");
const Item = require("../../models/item");

mongoose
    .connect("mongodb://localhost:27017/inventory")
    .then(() => console.log("[⚡] connected to database sucessfully"))
    .catch((err) => console.log(err));

// list of all items
exports.items = async (req, res) => {
    const items = await Item.find({});
    res.render("index", { items });
};

// add item
exports.addItemForm = async (req, res) => {
    res.render("new-item");
};
