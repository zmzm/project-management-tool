'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('board_lists', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      boardId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'boards',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('board_lists');
  },
};
