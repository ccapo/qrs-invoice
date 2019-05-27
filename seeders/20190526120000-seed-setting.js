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
   return queryInterface.bulkInsert('Setting', [{
      id: 1,
      name: 'Show Deleted Entries',
      value: 'false',
      type: 'BOOLEAN'
    }, {
      id: 2,
      name: 'Payment Grace Period (Days)',
      value: '30',
      type: 'INTEGER'
    }, {
      id: 3,
      name: 'Overdue Interest Rate (Percent)',
      value: '20.0',
      type: 'FLOAT'
    }, {
      id: 4,
      name: 'Tax Rate',
      value: '10.0',
      type: 'FLOAT'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Setting', null, {});
  }
};
