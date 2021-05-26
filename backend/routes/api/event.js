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
const { requireAuth } = require("../../utils/auth");

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

router.get(
  "/bookmarks/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const bookmark = await Bookmark.findAll({
      where: { userId: id },
      include: [
        {
          model: Event,
          include: [
            { model: Category },
            {
              model: Venue,
            },
          ],
        },
      ],
    });
    return res.json(bookmark);
  })
);

router.post(
  "/:id/bookmarks",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { eventId, userId } = req.body;
    const creating = { eventId, userId };
    const bookmark = await Bookmark.create(creating);

    return res.json(bookmark);
  })
);

router.delete(
  "/:id/bookmarks",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { eventId, userId } = req.body;
    const bookmark = await Bookmark.destroy({ where: { eventId, userId } });
  })
);
module.exports = router;
