"use strict";
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define(
    "Venue",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Venue.associate = function (models) {
    Venue.hasMany(models.Event, {foreignKey:'venueId'})
  };
  return Venue;
};
