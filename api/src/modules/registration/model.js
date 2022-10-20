const mongoose = require("mongoose");

const countSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
});

module.exports = mongoose.model("globers", countSchema);
