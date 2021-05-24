'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    userId: {
      type: DataTypes.INTEGER,

    },
    price: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsToMany(models.Event, {foreignKey:'eventId'})
    Ticket.belongsToMany(models.User, {foreignKey:'userId'})
  };
  return Ticket;
};