'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Ticket, {foreignKey:'eventId'})
    Event.belongsToMany(models.User, {through:'Bookmark',otherKey:'userId',foreignKey:'eventId'})
    Event.belongsTo(models.Category, {foreignKey:'categoryId'})
    Event.belongsTo(models.Venue, {foreignKey:'venueId'})
  };
  return Event;
};