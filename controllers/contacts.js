const contacts = require("../data/contacts")

const listContacts = (req, res) => {
  res.json(contacts);
}

const showContacts = (req, res) => {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]._id == req.params.id) {
        res.json(contacts[i]);
    }
}
  }



const createContacts = (req, res) => {
  req.body._Id = contacts.length;
  req.body.postID = 1;
  contacts.push(req.body);
  res.json(contacts)
}



module.exports = { listContacts, showContacts, createContacts }