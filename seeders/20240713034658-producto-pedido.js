'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('producto-pedido', [
      { id_prod_pedido: 0, id_pedido: 0, id_producto: 0, cantidad:2, precio: 38.98},
      { id_prod_pedido: 0, id_pedido: 0, id_producto: 2, cantidad:4, precio: 21.96},
      { id_prod_pedido: 1, id_pedido: 1, id_producto: 3, cantidad:5, precio: 124.95},
      { id_prod_pedido: 2, id_pedido: 2, id_producto: 1, cantidad:3, precio: 29.97},
      { id_prod_pedido: 3, id_pedido: 3, id_producto: 3, cantidad:2, precio: 49.98},
], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producto-pedido', null, {});
     
  }
};
