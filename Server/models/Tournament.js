const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema({
  tournamentName: {
    type: String,
  },
  dateStart: {
    type: Date,
  },
  dateFinish: {
    type: Date,
  },
  groupStage: [
    {
      players: {

      },
      scores: {
        
      },
    },
  ],
});
module.exports = mongoose.model("Tournament", tournamentSchema);
