const express = require("express");
const webpackAsset = require("./helpers/webpackAsset");
const renderApp = require('../../public/assets/SSR').default;
const app = express();
const port = 8080;

app.use("/assets", express.static("public/assets"));
app.use("/favicons", express.static("public/favicons"));
app.use("/robots.txt", express.static("public/robots.txt"));

app.set("views", __dirname);
app.set("view engine", "ejs");

app.get("*", (request, response) => {
  renderApp(request, response).then(params => {
    response.render("index", { webpackAsset, ...params });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
