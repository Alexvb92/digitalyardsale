'use strict';
module.exports = function(sequelize, DataTypes) {
  var categories = sequelize.define('categories', {
    departmentname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return categories;
};