'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return category.bulkCreate(
     [
      {departmentname:"Athletics"},
      {departmentname:"Technology"},
      {departmentname:"Gaming"},
      {departmentname:"Home"},
      {departmentname:"Cooking"},
      {departmentname:"Toys/Figures"},
      {departmentname:"Yard/Outdoor"},
      {departmentname:"Books"},
      {departmentname:"Music"},
      {departmentname:"Automotive"},
      {departmentname:"Clothing"},
      {departmentname:"Custom Makes"}
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
    return category.destroy({where:departmentname: [
      "Athletics",
      "Technology",
      "Gaming",
      "Home",
      "Cooking",
      "Toys/Figures",
      "Yard/Outdoor",
      "Books",
      "Music",
      "Automotive",
      "Clothing",
      "Custom Makes"
      ]},
      truncate: true
    })
  }
};
