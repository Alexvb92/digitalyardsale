'use strict';
module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', {
    productname: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    Purchased: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    departmentname: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return products;
};
