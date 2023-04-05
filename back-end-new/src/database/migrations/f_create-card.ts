'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('board_cards', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      about: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      boardListId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'board_lists',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('board_cards');
  },
};
