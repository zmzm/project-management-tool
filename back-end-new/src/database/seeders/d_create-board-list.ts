'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('board_lists', [
      {
        name: 'List for 1 board',
        createdAt: new Date(),
        updatedAt: new Date(),
        boardId: 1,
      },
      {
        name: 'List for 2 board',
        createdAt: new Date(),
        updatedAt: new Date(),
        boardId: 2,
      },
      {
        name: 'List for 3 board',
        createdAt: new Date(),
        updatedAt: new Date(),
        boardId: 3,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('board_lists');
  },
};
