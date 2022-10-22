const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("connected successful");
});
app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
