'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('User', [{
      id: 1,
      name: 'Admin',
      email: 'admin@example.com',
      is_admin: true,
      password_hash: null,
      tfa_secret: null
    }, {
      id: 2,
      name: 'User #1',
      email: 'user01@example.com',
      is_admin: false,
      password_hash: null,
      tfa_secret: null
    }, {
      id: 3,
      name: 'User #2',
      email: 'user02@example.com',
      is_admin: false,
      password_hash: null,
      tfa_secret: null
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('User', null, {});
  }
};
