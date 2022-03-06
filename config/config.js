//Importo las variables del fichero .env
require('dotenv').conf
//Exporto
module.exports = {
//Añado en paralelo constantes para poder trabajar en local si no tengo las variables de entorno
"development" : {
"username": process.env.DB_USERNAME || "root",
"password": process.env.DB_PASSWORD || "1234",
"database": process.env.DB_DATABASE || "videoclub",
"host": process.env.DB_HOST || "127.0.0.1",
"dialect": "mysql"
},
"test": {
"username": "root",
"password": null,
"database": "database_test",
"host": "127.0.0.1",
"dialect": "mysql"
},
"production": {
"username": process.env.DB_USERNAME,
"password": process.env.DB_PASSWORD,
"database": process.env.DB_DATABASE,
"host": process.env.DB_HOST,
"dialect": "mysql"
}
}




















