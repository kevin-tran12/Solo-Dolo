"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Venues",
      [
        {
          name: "Avalon Hollywood",
          city: "Hollywood",
          capacity: 500,
        },
        {
          name: "Exchange LA",
          city: "Los Angeles",
          capacity: 600,
        },
        {
          name: "Bootie",
          city: "San Francisco",
          capacity: 300,
        },
        {
          name: "Barley House",
          city: "Cleveland",
          capacity: 400,
        },
        {
          name: "Bounce",
          city: "New York City",
          capacity: 700,
        },
        {
          name: "Sutra",
          city: "Costa Mesa",
          capacity: 500,
        },
        {
          name: "Hakkasan",
          city: "Las Vegas",
          capacity: 600,
        },
        {
          name: "Tongue and Groove",
          city: "Atlanta",
          capacity: 300,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Venues",null,{});
  },
};
