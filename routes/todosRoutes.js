const express = require('express');
const todosController = require('../controllers/todosController');

const router = express.Router();

router.get('/', todosController.todos_get_all);

module.exports = router;

