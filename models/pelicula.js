'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Pedido, {
        foreignKey: 'peliculaId'
      });
    }
  }
  Pelicula.init({
    titulo: DataTypes.STRING,
    sinopsis: DataTypes.TEXT,
    adult: DataTypes.BOOLEAN,
    popularity: DataTypes.FLOAT,
    image: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};