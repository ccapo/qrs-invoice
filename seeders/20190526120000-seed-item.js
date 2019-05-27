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
   return queryInterface.bulkInsert('Item', [{
      id: 1,
      name: 'Item #1',
      description: 'Our number one invoice item',
      price: 3.14
    }, {
      id: 2,
      name: 'Item #2',
      description: 'Our number two invoice item',
      price: 1.23
    }, {
      id: 3,
      name: 'Item #3',
      description: 'Our number three invoice item',
      price: 3.21
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Item', null, {});
  }
};
