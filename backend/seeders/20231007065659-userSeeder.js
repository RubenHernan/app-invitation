'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const bcrypt = require('bcryptjs');
    // datos del usuario administrador
    const adminUserData = {
      login: 'admin',
      name: 'Rubén',
    };
    
    const plainTextPassword = 'admin'; // contraseña
    const saltRounds = 10; //bcrypt
    const hashedPassword = bcrypt.hashSync(plainTextPassword, saltRounds);
    
    // crea al usuario administrador en la base de datos
    await queryInterface.bulkInsert('users', [{
      login: adminUserData.login,
      name: adminUserData.name,
      password: hashedPassword,
    }], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
