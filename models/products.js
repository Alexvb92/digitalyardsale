'use strict';
module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', {
    productname: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return products;
};