'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    id: {type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true},
    money: {type: DataTypes.INTEGER, defaultValue: 10000}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
