const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://raj_savsani:raj22@cluster0.ybbtu.mongodb.net/music"
  );
};
module.exports = connect;