'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teams', [
      {
        name: 'Test team 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Test team 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Test team 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
