const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const appName = process.env.APP_NAME || "Node.js App";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
  res.render("index", { appName });
  console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
  console.log(`${appName} is listening on port ${port}`);
});
