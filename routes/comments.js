const express = require('express')
const commentsRouter = express.Router()

const commentsController = require('../controllers/comments.js')

commentsRouter.get('/comments', commentsController.listComments)

commentsRouter.get('/comments/:id', commentsController.showComments)

commentsRouter.post('/comments', commentsController.createComments)

module.exports = commentsRouter;