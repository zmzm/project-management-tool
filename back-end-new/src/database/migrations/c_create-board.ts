'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('boards', {
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
      closed: {
        type: Sequelize.DataTypes.BOOLEAN,
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
      teamId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('boards');
  },
};
