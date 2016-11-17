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
        {productname: "Pearl Drums", price: "550", location: "Cary, NC", departmentname: "Music", imageurl: "http://pearldrum.com/common/assets/pdf/catalog/2016-price-list.jpg"},
        {productname: "Iron Gym Pull Up Bar", price: "29.99", location: "San Francisco, CA", departmentname: "Athletics", imageurl: "http://03526f9.netsolhost.com/wp-content/uploads/2011/11/irongym.jpg"},
        {productname: "evga sc-17", price: "2700", location: "Chapel Hill, NC", departmentname: "Technology", imageurl: "http://www.ozone3d.net/public/jegx/201601/evga_sc17_gaming_laptop_01.jpg"},
        {productname: "Ps4 Pro", price: "399", location: ", NY", departmentname: "Gaming", imageurl: "https://media.playstation.com/is/image/SCEA/playstation-4-pro-vertical-product-shot-01-us-07sep16?$TwoColumn_Image$"},
        {productname: "Superman Figure", price: "299", location: "Efland, NC", departmentname: "Toys/Figures", imageurl: "http://img.amiami.jp/images/product/review/132/FIG-KAI-5621_01.jpg"}
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

      "Pearl Drums",
      "Iron Gym Pull Up Bar",
      "evga sc-17",
      "Ps4 Pro",
      "Superman Figure"

      ]},
      truncate: true
    })
  }
};
