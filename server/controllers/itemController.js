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

// add item form
exports.addItemForm = async (req, res) => {
    res.render("new-item");
};

// create item
exports.addItem = async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.redirect("/items");
};

// view item
exports.viewItem = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("view-item", { item });
};

// edit item form
exports.editItemForm = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render("edit-item", { item });
};

// update item
exports.updateItem = async (req, res) => {
    const id = req.params.id;
    const item = await Item.findByIdAndUpdate(id, { ...req.body });
    res.redirect(`/items/${id}`);
};

// delete item
exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.redirect("/items");
};
