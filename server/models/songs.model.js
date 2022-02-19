const mongoose = require("mongoose");

const album = require("./album.model");

const artist = require("./artist.model");

const songSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: String, required: true },
    poster: [{ type: String, required: true }],
    album_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: album,
      required: true,
    },
    singer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: artist,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("song", songSchema);
