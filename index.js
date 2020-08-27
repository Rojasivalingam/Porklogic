

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', db.getUsers);

app.listen(5000, () => {
  console.log('port 5000');
})