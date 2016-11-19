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
    underscored: true,
    freezeTableName: true,
    tableName: 'products',

    classMethods: {
      associate: function(models) {
        products.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        })
      }
    }
  });

  return products;
};
