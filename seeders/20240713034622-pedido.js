'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('pedido', [
      { id_pedido: 0, id_cliente: 0, fecha: new Date(), estado:"En bodega"},
      { id_pedido: 1, id_cliente: 1, fecha: new Date(), estado:"En camino"},
      { id_pedido: 2, id_cliente: 2, fecha: new Date(), estado:"En camino"},
      { id_pedido: 3, id_cliente: 3, fecha: new Date(), estado:"Recibido"},
      { id_pedido: 4, id_cliente: 3, fecha: new Date(), estado:"En bodega"}

], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('pedido', null, {});
     
  }
};
