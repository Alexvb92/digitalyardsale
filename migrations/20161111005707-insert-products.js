'use strict';
var product = require('../models')['products']
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return product.bulkCreate(
      [
        {productname: "Quarter Pound Cheese Burger"},
        {productname: "Big Mac"},
        {productname: "Bacon Swiss Burger"},
        {productname: "A1 Bacon Swiss Burger"},
        {productname: "Turkey Burger"}

      ]
    )


  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return product.destroy({ where:{productname: [

      "Quarter Pound Cheese Burger",
      "Big Mac",
      "Bacon Swiss Burger",
      "A1 Bacon Swiss Burger",
      "Turkey Burger"

      ]},
      truncate: true
    })
  }
};
