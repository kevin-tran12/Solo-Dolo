"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
         genre:'Hardstyle'
        },
        {
         genre:'House' 
        },
        {
         genre:'Techno'
        },
        {
         genre:'Trance'
        },
        {
         genre:'Future Bass'
        },
        {
         genre:'Dubstep' 
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories",null,{});
  },
};
