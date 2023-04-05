'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('card_comments', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      text: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      cardId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'board_cards',
          key: 'id',
        },
        allowNull: false,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('card_comments');
  },
};
