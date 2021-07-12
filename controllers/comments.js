const comments = require("../data/comments")

const listComments = (req, res) => {
  res.json(comments);
}

const showComments = (req, res) => {
  for (let i = 0; i < comments.length; i++) {
    if (comments[i]._id == req.params.id) {
        res.json(comments[i]);
    }
}
  }



const createComments = (req, res) => {
  req.body._Id = comments.length;
  req.body.postID = 1;
  comments.push(req.body);
  res.json(vehicles)
}



module.exports = { listComments, showComments, createComments }