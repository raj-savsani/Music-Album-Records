const mongoose = require("mongoose")
const bcryptjs = require('bcryptjs');
const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 100
    },
    
}, {
    versionKey: false,
    timestamps: true
})

artistSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();

    const hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash

    return next();
})

artistSchema.methods.checkPassword = function (password) {
    const match = bcryptjs.compareSync(password, this.password);

    return match;
}
module.exports = mongoose.model("artist", artistSchema)