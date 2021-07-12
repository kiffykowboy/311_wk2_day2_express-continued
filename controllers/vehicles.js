const vehicles = require("../data/vehicles")

const listVehicles = (req, res) => {
  res.json(vehicles);
}

const showVehicles = (req, res) => {
  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i]._id == req.params.id) {
        res.json(vehicles[i]);
    }
}
  }



const createVehicles = (req, res) => {
  req.body._Id = vehicles.length;
  req.body.postID = 1;
  vehicles.push(req.body);
  res.json(vehicles)
}



module.exports = { listVehicles, showVehicles, createVehicles }