'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productos', [
      { id_producto: 0, descripcion: "Mochila", precio: 19.49, stock:20},
      { id_producto: 1, descripcion: "Cartuchera", precio: 9.99, stock:20},
      { id_producto: 2, descripcion: "Lonchera", precio: 5.49, stock:20},
      { id_producto: 3, descripcion: "Chaqueta", precio: 24.99, stock:20}
], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('productos', null, {});
     
  }
};
