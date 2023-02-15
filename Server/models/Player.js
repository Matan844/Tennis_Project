const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  grade: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  playerId: {
    type: Number,
  },
  medicalCertificate: {
    type: String,
  },
  category: {
    type: String,
  },
  notes: {
    type: String,
  },
});
module.exports = mongoose.model("Player", playerSchema);
