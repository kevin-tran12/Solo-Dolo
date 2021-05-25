const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {
  Bookmark,
  Category,
  Event,
  Ticket,
  User,
  Venue,
} = require("../../db/models");

router.get(
  "",
  asyncHandler(async (req, res) => {
    const events = await Event.findAll({
      include: [
        { model: Category, attributes: ["genre"], require: true },
        {
          model: Venue,
          attributes: ["name", "city", "capacity"],
          require: true,
        },
      ],
    });
    return res.json({ events });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const eventId = parseInt(req.params.id);
    const events = await Event.findOne({
      where: { id: eventId },
      include: [
        { model: Category, attributes: ["genre"], require: true },
        {
          model: Venue,
          attributes: ["name", "city", "capacity"],
          require: true,
        },
        { model: Ticket, attributes: ["price"], require: true },
      ],
    });
    return res.json(events);
  })
);

module.exports = router;
