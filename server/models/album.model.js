const mongoose = require("mongoose");

const albumShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "artist",
    required: true,
  },
  artistname: {
    type: String,
    required: false,
  },
  artistimg: {
    type: String,
    required: false,
  },
  albumimg: {
    type: String,
    required: false,
  },
  songs: {
    type: Array,
    required: true,
  },
});



module.exports = mongoose.model("album", albumShema);
