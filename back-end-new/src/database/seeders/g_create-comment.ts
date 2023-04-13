'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('card_comments', [
      {
        text: 'Test comment from John',
        createdAt: new Date(),
        updatedAt: new Date(),
        cardId: 1,
        userId: 1,
      },
      {
        text: 'Test comment from Jane',
        createdAt: new Date(),
        updatedAt: new Date(),
        cardId: 2,
        userId: 2,
      },
      {
        text: 'Test comment from Tom',
        createdAt: new Date(),
        updatedAt: new Date(),
        cardId: 3,
        userId: 3,
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('card_comments');
  },
};
