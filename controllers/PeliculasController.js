const { default: axios } = require("axios");
const { Pelicula } = require('../models/index');
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");

const PeliculasController = {};

PeliculasController.importaPeliculas = async (req,res) => {

    let busqueda = 1;

   try{

 let resultados = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${busqueda}&page=1&include_adult=false`);

 res.send(resultados.data.title);

   } catch (err){
       
       res.send(err);
   }

}

PeliculasController.importaPeliculas2 = async () => {

    const minMaxRoundedRandom = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }
    clone = async () => {
        ///Variable para guardar el root para ver el póster
        let TMDBimgUrlRoot = "https://image.tmdb.org/t/p/original";
        //Endpoint para traerme una página entera de películas. Necesario para tenerlo una primera vez
        let firstScan = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        //bucle para recorrer 25 páginas de resultados. El valor de page lo saco de una función random para que no siempre muestre las mismas páginas.
        for(let j=1 ; j<=25 ; j++) {
            let resultss = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${minMaxRoundedRandom(1, 25)}&with_watch_monetization_types=flatrate`);
            //Saco el número de resultados por página para meterselo al siguiente bucle
            let numbOfResultsPerPageTMDB = resultss.data.results.length
            //Recorro cada elemento de la página para ir guardándolo acorde a los campos de mi BBDD
            for(let i=0; i<numbOfResultsPerPageTMDB ; i++) {
                //Por cada iteración creo un elemento
                Film.create({
                    //A la izquierda mis campos de mi BBDD
                    //A la derecha los campos que devuelve TMDB
                    titulo : resultss.data.results[i].original_title,
                    sinopsis : resultss.data.results[i].overview,
                    fecha : resultss.data.results[i].date,
                    popularity : resultss.data.results[i].popularity,
                    image : (TMDBimgUrlRoot + "/" + resultss.data.results[i].poster_path)
                })
            }
        }
        return (`${25} pages have been clonated succesfully, with a total amount of ${500} films`)
    };

    };

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
    Pelicula.findAll({ where : { titulo : req.params.titulo }})
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

        Pelicula.destroy({
            where : { id : id },
            truncate : false
        })
        .then(peliculaEliminado => {
            console.log(peliculaEliminado);
            res.send(`La pelicula con la id ${id} ha sido eliminada`);
        })

    } catch (error) {
        res.send(error);
    }

};

PeliculasController.deleteAll = () => {
    try {

        Pelicula.destroy({
            where : {},
            truncate : false
        })
        .then(peliculaEliminadas => {
            res.send(`Se han eliminado ${peliculaEliminadas} peliculas`);
        })

    } catch (error) {
        res.send(error);
    }
}


module.exports = PeliculasController;