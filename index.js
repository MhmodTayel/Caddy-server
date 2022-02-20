const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("production will be fine v6 admin!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
