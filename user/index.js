const express = require('express')
var cors = require("cors");
const app = express()
const port = 4000
var server = require("https").createServer(app);

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})