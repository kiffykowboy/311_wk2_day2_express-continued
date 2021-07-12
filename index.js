const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 4001;

const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



const contacts = require('./data/contacts')
const vehicles = require('./data/vehicles')
const comments = require('./data/comments')
const products = require('./data/products');

const commentsRouter = require("./routes/comments");
const contactsRouter = require("./routes/contacts");
const productsRouter = require("./routes/products");
const vehiclesRouter = require("./routes/vehicles");



app.use(commentsRouter);
app.use(contactsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
