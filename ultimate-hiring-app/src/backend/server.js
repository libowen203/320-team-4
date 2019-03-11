/* **
This server.js is based off of the tutorial at https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274
** */
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const router = express.Router()

const dbRoute = "mongodb://127.0.0.1/scrumgang_server"


// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection

db.once("open", () => console.log("connected"))

app.listen('3000')
console.log("Working")
