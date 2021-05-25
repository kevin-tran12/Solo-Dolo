"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
         name:'Porter Robinson Nurture Live North America Tour',
         description:'Porter Robinson Concert Tickets',
         date: "09-03-2021",
         categoryId: 2,
         venueId: 5
        },
        {
         name:'Illenium',
         description:'Illenium Concert Tickets',
         date: "04-20-2055",
         categoryId: 5,
         venueId:2
        },
        {
         name:'Excision',
         description:'Ages 18+ Only',
         date: "06-09-2069",
         categoryId: 1,
         venueId:3
        },
        {
         name:'Rezz',
         description:'Tour name: Arezzona',
         date: "07-03-3000",
         categoryId: 3,
         venueId:1
        },
        {
         name:'Above & Beyond',
         description:'Celebrated dance act Above & Beyond',
         date:"12-31-2099" ,
         categoryId: 4,
         venueId:6
        },
        {
         name:'Zomboy',
         description:'Reschedule! All tickets for the original date will be honored for this new date.',
         date:"06-30-2031" ,
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
