
const router = require('express').Router();


const UsuarioRouter = require('./views/UsuarioRouter');
const PeliculasRouter = require('./views/PeliculasRouter');

router.use('/usuarios', UsuarioRouter);
router.use('/peliculas', PeliculasRouter);

module.exports = router;