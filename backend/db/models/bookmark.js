'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    id: {type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.Event, { foreignKey: 'eventId' })
    Bookmark.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Bookmark;
};