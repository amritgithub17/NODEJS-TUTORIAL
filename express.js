const express = require('express')
const app = express()
const port = 3000
const fs=require('fs');
const data = fs.readFileSync('index.html');
app.get('/', (req, res) => {
  res.send(data.toString());
})
app.get('/about', (req, res) => {
  res.send('Hello Visiter! You have visited on about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})