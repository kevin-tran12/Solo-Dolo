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
    Ticket.belongsTo(models.Event, {foreignKey:'eventId'})
    Ticket.belongsTo(models.User, {foreignKey:'userId'})
  };
  return Ticket;
};