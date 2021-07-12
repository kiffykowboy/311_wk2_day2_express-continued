const products = require("../data/products")

const listProducts = (req, res) => {
  res.json(products);
}

const showProducts = (req, res) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id == req.params.id) {
        res.json(products[i]);
    }
}
  }



const createProducts = (req, res) => {
  req.body._Id = products.length;
  req.body.postID = 1;
  products.push(req.body);
  res.json(products)

}



module.exports = { listProducts, showProducts, createProducts }