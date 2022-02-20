const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("production will be fine v5!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
