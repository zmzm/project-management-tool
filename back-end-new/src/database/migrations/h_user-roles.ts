'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_roles', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      roleId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'roles',
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
    await queryInterface.dropTable('user_roles');
  },
};
