const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.get('/', controller.getTarefas);
router.get('/:id', controller.getTarefaById);
router.post('/', controller.createTarefa);
router.put('/:id', controller.updateTarefa);
router.delete('/:id', controller.deleteTarefa);

module.exports = router;