const express = require("express");

const router = express.Router();

const Songs = require("../models/songs.model");

const authorise = require("../middleware/authorise");

router.post("/", async (req, res) => {
  try {
    const songs = await Songs.create(req.body);
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const page = +req.query.Page || 1;
    const size = +req.query.size || 2;
    const offset = (page - 1) * size;
    const songs = await Songs.find()
      .populate("album_id")
      .populate({
        path: "singer_id",
        select: {
          firstname: 1,
          lastname: 1,
          gender: 1,
        },
      })
      .skip(offset)
      .limit(size)
      .lean()
      .exec();
    const total_pages = Math.ceil((await Songs.find().countDocuments()) / size);
    res.status(200).json({ songs, total_pages });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const songs = await Songs.findById(req.params.id)
      .populate("album_id")
      .populate("singer_id")
      .lean()
      .exec();
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const songs = await Songs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .populate("album_id")
      .populate("singer_id")
      .lean()
      .exec();
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const songs = await Songs.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({ songs: songs });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});

module.exports = router;
