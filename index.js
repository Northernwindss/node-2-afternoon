const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set(`db`, dbInstance)
}).catch(err => console.log(err));





const PORT = process.envPORT || 3000;
app.listen(PORT, () => {
  console.log(`breathe in breathe out ${PORT}`)
})