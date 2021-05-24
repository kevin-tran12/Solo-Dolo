'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Ticket, {foreignKey:'eventId'})
    Event.belongsToMany(models.User, {through:'Bookmark',otherKey:'userId',foreignKey:'eventId'})
    Event.belongsToMany(models.Category, {foreignKey:'categoryId'})
  };
  return Event;
};