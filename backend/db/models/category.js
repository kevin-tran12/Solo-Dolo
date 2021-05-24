'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    genre:{
      type: DataTypes.STRING,
      allowNull: false,
      },
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Event, {foreignKey:'categoryId'})
  };
  return Category;
};