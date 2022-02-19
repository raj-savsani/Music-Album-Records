const express = require("express");

const mongoose = require("mongoose");

const router = express.Router();

const Artist = require('../models/artist.model');

router.post('/', async (req, res) => {
    try { 
        const artistData = await Artist.create(req.body);
        res.status(200).json({artistData:artistData})
    } catch (e) {
        res.status(500).json({ Staus: "failed",error:e.message });
    }
})

router.get("/", async (req, res) => {
  try {
    const artistsData = await Artist.find().lean().exec();
    res.status(200).json({ artistsData: artistsData });
  } catch (e) {
    res.status(500).json({ Staus: "failed", error: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const artistData = await Artist.findById(req.params.id).lean().exec();
    res.status(200).json({ artistData: artistData });
  } catch (e) {
    res.status(500).json({ Staus: "failed", error: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const artistData = await Artist.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
    res.status(200).json({ artistData: artistData });
  } catch (e) {
    res.status(500).json({ Staus: "failed",error:e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const artistData = await Artist.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    res.status(200).json({ artistData: artistData });
  } catch (e) {
    res.status(500).json({ Staus: "failed", error: e.message });
  }
});

module.exports=router;