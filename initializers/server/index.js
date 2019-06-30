const express = require("express");
const webpackAsset = require("./helpers/webpackAsset");
const app = express();
const port = 8080;

app.use("/assets", express.static("public/assets"));
app.use("/favicons", express.static("public/favicons"));

app.set("views", __dirname);
app.set("view engine", "ejs");

app.get("*", (request, response) => {
  response.render("index", { webpackAsset });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
