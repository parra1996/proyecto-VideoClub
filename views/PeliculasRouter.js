
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const PeliculasController = require('../controllers/PeliculasController');


//CRUD RESTful

router.get('/importadas', PeliculasController.importaPeliculas);

router.post('/importadas2', PeliculasController.importaPeliculas2);

router.get('/todas', PeliculasController.traePelicula);

router.get('/:id', auth, PeliculasController.traerPeliculaId);

router.get('/titulo/:titulo', auth, PeliculasController.traerPeliculaTitulo);
//Registro de una peli nueva
router.post('/', PeliculasController.registraPelicula);

//Búsqueda de películas por título y adulto
router.get('/favoritas',auth,PeliculasController.favouriteFilms);

router.get('/adultos', auth,PeliculasController.peliculasAdultas);
//Búsqueda de películas por título
router.get('/titulo',auth, PeliculasController.peliculasImportadasTitulo);

//Búsqueda de novedades
router.get('/novedades', auth,PeliculasController.traeNovedades);

router.delete('/:id', isAdmin, PeliculasController.deleteById);

router.delete('/', isAdmin, PeliculasController.deleteAll);



module.exports = router;