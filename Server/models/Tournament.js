const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema({
  tournamentName: {
    type: String,
  },
  dateStart: {
    type: String,
  },
  dateFinish: {
    type: String,
  },
  groupStage: [
    {
      players: {},
      scores: {},
    },
  ],
  finals:{
     type:Object,
    },
});
module.exports = mongoose.model("Tournament", tournamentSchema);
