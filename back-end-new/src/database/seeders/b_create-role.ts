'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        type: 'USER',
        description: 'Default user role',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'ADMIN',
        description: 'Super user role',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
