const express = require('express');
const contactController = require('../controllers/ContactController');

const router = express.Router();


router.get('/',contactController.getAllContacts);
router.post('/add',contactController.createContact);
router.get('/:id',contactController.getContact);
router.put('/:id',contactController.updateContact);
router.delete('/:id',contactController.deleteContact);

module.exports=router;