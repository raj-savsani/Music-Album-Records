const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { register, login } = require("./controllers/auth.controller");

const albumController = require("./controllers/album.controller");

const artistController = require("./controllers/artist.controller");

const songsController = require("./controllers/songs.controller");

app.post("/login", login);

app.post("/register", register);

app.use("/album", albumController);

app.use("/artists", artistController);

app.use("/songs", songsController);

module.exports = app;
