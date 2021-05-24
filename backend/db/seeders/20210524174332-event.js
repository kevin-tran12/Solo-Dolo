"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
         name:'Porter Robinson Nurture Live North America Tour',
         description:'Porter Robinson Concert Tickets',
         categoryId: 2,
         venueId: 5
        },
        {
         name:'Illenium',
         description:'Illenium Concert Tickets',
         categoryId: 5,
         venueId:2
        },
        {
         name:'Excision',
         description:'Ages 18+ Only',
         categoryId: 1,
         venueId:3
        },
        {
         name:'Rezz',
         description:'Tour name: Arezzona',
         categoryId: 3,
         venueId:1
        },
        {
         name:'Above & Beyond',
         description:'Celebrated dance act Above & Beyond',
         categoryId: 4,
         venueId:6
        },
        {
         name:'Zomboy',
         description:'Reschedule! All tickets for the original date will be honored for this new date.',
         categoryId: 6,
         venueId:7
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events",);
  },
};
