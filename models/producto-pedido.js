'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto - pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  producto - pedido.init({
    id_prod_pedido: DataTypes.INTEGER,
    id_pedido: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'producto-pedido',
  });
  return producto - pedido;
};