"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tickets",
      [
        {
         price:600,
         eventId:1
        },
        {
         price:700,
         eventId:2
        },
        {
         price:1000,
         eventId:3
        },
        {
         price: 800,
         eventId:4
        },
        {
         price:457,
         eventId:5
        },
        {
         price:900,
         eventId:6
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tickets",null,{});
  },
};
