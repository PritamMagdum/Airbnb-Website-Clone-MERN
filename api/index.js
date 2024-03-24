const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey User it is working really");
});
app.listen(8080);
