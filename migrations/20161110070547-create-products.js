'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productname: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      Purchased: {
        type: Sequelize.BOOLEAN
      },
      departmentname: {
        type: Sequelize.STRING
      },
      imageurl: {
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
      user_id: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('products');
  }
};
