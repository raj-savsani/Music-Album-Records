const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const artistSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_pic: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

artistSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

artistSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);
      return resolve(same);
    });
  });
};

module.exports = mongoose.model("artist", artistSchema);
