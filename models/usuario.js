'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.hasMany(models.Pedido, {
        foreignKey: 'usuarioId'
      });
    }
  }
  Usuario.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    password: DataTypes.STRING,
    rol: DataTypes.BOOLEAN
    
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};