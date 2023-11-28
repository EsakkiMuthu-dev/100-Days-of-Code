// create Express app
const express = require('express');
const router= express.Router(); //  create one router object
const contactController = require('../controllers/contactController');

//Routes for CRUD operations
router.get('/',contactController.getAllContacts);
router.post('/add',contactController.createContact);
router.get('/:id',contactController.getContactById);
router.put('/:id',contactController.updateContact);
router.delete('/:id',contactController.deleteContact);

module.exports=router;