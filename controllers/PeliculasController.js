const { default: axios } = require("axios");
const { Pelicula } = require('../models/index');
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");




const PeliculasController = {};


//Funciones del controlador

// PeliculasController.importaPeliculas = async (req, res) => {

//     let pedido = req.query.pedido;

//     let todasPeliculas = await axios.get(`https://api.themoviedb.org/3/movie/${pedido}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);


// };

PeliculasController.traePelicula = (req,res) => {
      //Búsqueda trayendo a todos los usuarios
      Pelicula.findAll()
      .then(data => {
  
          res.send(data)
      });
}

PeliculasController.traerPeliculaId = (req, res) => {
    //Búsqueda buscando una Id
    Pelicula.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

PeliculasController.traerPeliculaTitulo = (req, res) => {
    //Búsqueda comparando un campo
    Pelicula.findOne({ where : { titulo : req.params.titulo }})
    .then(data => {
        console.log(data)
        res.send(data)
    });
}

PeliculasController.registraPelicula = (req, res) => {
     
    //Registrando un usuario
    
    let titulo = req.body.titulo;
    let sinopsis = req.body.sinopsis;
    let adult = req.body.adult;
    let fecha = req.body.fecha;
    
    //Comprobación de errores.....
    
    //Guardamos en sequelize el usuario
    Pelicula.findAll({
        where : {

            [Op.or] : [
                {
                    titulo : {
                        [Op.like] : titulo
                    }
                },
            ]
        }

    }).then(datosRepetidos => {

        if(datosRepetidos == 0){

                Pelicula.create({
                titulo: titulo,
                sinopsis: sinopsis,
                adult: adult,
                fecha : fecha
            }).then(pelicula => {
                res.send(`${pelicula.titulo}, agregada a la base de datos`);
            })
            .catch((error) => {
                res.send(error);
            });

        }else {
            res.send("esta pelicula ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });


};

PeliculasController.peliculasImportadasTitulo = async (req, res) => {

    let busqueda = req.query.criterio;

    try {

        let resultados = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${busqueda}&page=1&include_adult=false`);

        res.send(resultados.data);
        

    } catch (error) {
        console.log(error);
    }

}

PeliculasController.traeNovedades = async (req, res) => {

    try {

        let resultados = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=es-ES&page=1");

        res.send(resultados.data);

    } catch (error) {
        console.log(error);
    }
}

PeliculasController.favouriteFilms = (req,res) => {


    let titulo = req.query.titulo;
    let adult = req.query.adult;
    let popularity = req.query.popularity;

    Pelicula.findAll({
        where : {

            [Op.and] : [
                {
                    titulo : {
                        [Op.like] : titulo
                    }
                },
                {
                    adult : {
                        [Op.like] : adult
                    }
                },
                {
                    popularity : {
                        [Op.like] : popularity
                    }
                }
            ]

        }
    }).then(films => {

        if(films != 0){
            res.send(films);
        }else {
            res.send(`Película no encontrada`);
        };

    }).catch(error => {
        res.send(error);
    })
}

PeliculasController.peliculasAdultas = (req,res) => {

    //todas las películas que no sean para niños

    Pelicula.findAll({
        where : {
            [Op.not] : [
                {
                    adult : {
                        [Op.like] : 0
                    }
                }
            ]
        }
    }).then(peliculasAdultas => {
        if(peliculasAdultas != 0){
            res.send(peliculasAdultas);
        }else {
            res.send("No hay películas que no sean para niños");
        }
    }).catch(error =>{
        res.send(error)
    })

}


PeliculasController.deleteById = async (req, res) => {

    let id = req.params.id;

    try {

        Peliculas.destroy({
            where : { id : id },
            truncate : false
        })
        .then(usuarioEliminado => {
            console.log(usuarioEliminado);
            res.send(`El usuario con la id ${id} ha sido eliminado`);
        })

    } catch (error) {
        res.send(error);
    }

};


module.exports = PeliculasController;