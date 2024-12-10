const mongoose = require("mongoose");
const Item = require("../models/item");

mongoose
  .connect("mongodb://localhost:27017/inventory")
  .then(() => console.log("[⚡] connected to database sucessfully"))
  .catch((err) => console.log(err));

const seedDb = async () => {
  await Item.deleteMany({});

  for (let i = 0; i < 10; i++) {
    const item = new Item({
      name: "Item " + i,
      category: "Category " + i,
      quantity: i,
      price: i,
      description: "Description " + i,
    });
    await item.save();
  }
};

seedDb().then(() => mongoose.connection.close());
