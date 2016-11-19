'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      created_At: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_At: {
        allowNull: false,
        type: Sequelize.DATE
      },
      money: {
        type: Sequelize.INTEGER,
        defaultValue: 10000
       }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
