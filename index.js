const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

const itemRoutes = require("./server/routes/itemRoutes");
const helloWorldRoutes = require("./server/routes/helloWorldRoutes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/items", itemRoutes);
app.use("/hello-world", helloWorldRoutes);

app.listen(port, () => {
    console.log(`App server is running on port ${port}`);
});
