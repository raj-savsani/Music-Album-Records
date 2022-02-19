const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://raman:raman@cluster0.kpuis.mongodb.net/test"
  );
};
module.exports = connect;