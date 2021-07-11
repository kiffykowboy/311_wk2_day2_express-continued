const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 4001;

const app = express();

app.use(express.static('public'))
app.use(express.json());

const { contacts } = require('./data/contacts')
const { vehicles } = require('./data/vehicles')
const { comments } = require('./data/comments')
const { products } = require('./data/products');

const router = require("./routes/vehicles");

app.use("../routes/contacts")
app.use("../routes/comments")
app.use("../routes/vehicles")
app.use("../routes/products")

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
