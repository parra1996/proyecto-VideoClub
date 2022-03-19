
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const PedidosController = require('../controllers/PedidosController');


router.post('/', PedidosController.nuevoPedido);

router.get('/', auth, PedidosController.todosPedidos);

router.post('/:id', PedidosController.pedidoId )

router.delete('/:id', auth, isAdmin, PedidosController.deleteById);

router.delete('/', auth, isAdmin, PedidosController.deleteAll);




module.exports = router;