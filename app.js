const express = require('express')
const app = express()
const port=3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})