'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_roles', [
      {
        roleId: 1,
        userId: 1,
      },
      {
        roleId: 2,
        userId: 2,
      },
      {
        roleId: 2,
        userId: 3,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('user_roles');
  },
};
