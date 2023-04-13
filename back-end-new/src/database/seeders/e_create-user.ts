'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jone.doe@test.com',
        password: 'qwerty123456',
        createdAt: new Date(),
        updatedAt: new Date(),
        teamId: 1,
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@test.com',
        password: 'qwerty7890',
        createdAt: new Date(),
        updatedAt: new Date(),
        teamId: 2,
      },
      {
        firstName: 'Tom',
        lastName: 'Doe',
        email: 'tom.doe@test.com',
        password: '123qwerty678',
        createdAt: new Date(),
        updatedAt: new Date(),
        teamId: 3,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('users');
  },
};
