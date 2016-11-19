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
    underscored: true,
    freezeTableName: true,
    tableName: 'Users',

    classMethods: {
      associate: function(models) {
        User.hasMany(models.products, {
          onDelete: "CASCADE",
          hooks: true,
          foreignKey: {
            allowNull: true
          }
        })
      }
    }
  })
  return User;
};
