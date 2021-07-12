const express = require('express')
const contactsRouter = express.Router()

const contactsController = require('../controllers/contacts.js')

contactsRouter.get('/contacts', contactsController.listContacts)

contactsRouter.get('/contacts/:id', contactsController.showContacts)

contactsRouter.post('/contacts', contactsController.createContacts)

module.exports = contactsRouter;