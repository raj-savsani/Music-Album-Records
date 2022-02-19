const express = require("express");

const router = express.Router();

const Album = require("../models/album.model");

router.post("/", async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const page = +req.query.Page || 1;
    const size = +req.query.size || 2;
    const offset = (page - 1) * size;
    const album = await Album.find()
      .populate({
        path: "artist_id",
        select: {
          firstname: 1,
          lastname: 1,
          gender: 1,
          profile_pic: 1,
        },
      })
      .skip(offset)
      .limit(size)
      .lean()
      .exec();
    const total_pages = Math.ceil((await Album.find().countDocuments()) / size);
    
    res.status(200).json({ album, total_pages });


  
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).lean().exec();
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({ album: album });
  } catch (err) {
    res.status(500).json({ Status: "failed", error: err.message });
  }
});
module.exports = router;
