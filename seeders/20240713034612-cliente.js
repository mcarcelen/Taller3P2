'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkInsert('cliente', [
        { id_cliente: 0, nombre: "Guillermo", apellido: "Plata"},
        { id_cliente: 1, nombre: "Juan", apellido: "Perez"},
        { id_cliente: 2, nombre: "Benito", apellido: "Juarez"},
        { id_cliente: 3, nombre: "Andres", apellido: "Sanchez"},
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('cliente', null, {});
     
  }
};
