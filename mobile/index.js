const express = require("express");
const router = express.Router();

const {listAction, minusAction, addAction, formAction, saveAction} = require('./controller.js');

router.get('/', listAction);
router.get('/minus/:id', minusAction);
router.get('/add/:id', addAction);
router.get('/form/:id?', formAction);
router.post('/save', saveAction);



module.exports = router ;