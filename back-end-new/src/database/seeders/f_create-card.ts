'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('board_cards', [
      {
        name: 'Test card',
        about: 'Test card for first list',
        createdAt: new Date(),
        updatedAt: new Date(),
        boardListId: 1,
      },
      {
        name: 'Test card',
        about: 'Test card for second list',
        createdAt: new Date(),
        updatedAt: new Date(),
        boardListId: 2,
      },
      {
        name: 'Test card',
        about: 'Test card for third list',
        createdAt: new Date(),
        updatedAt: new Date(),
        boardListId: 3,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('board_cards');
  },
};
