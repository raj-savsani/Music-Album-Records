const mongoose = require("mongoose");

const artist = require("./artist.model");

const albumSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    album_img: { type: String, required: true },
    artist_id: {
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
module.exports = mongoose.model("album", albumSchema);
