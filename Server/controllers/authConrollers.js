const Player = require("../models/Player");
const Admin=require("../models/Admin")
const Tournament=require("../models/Tournament")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {

  const newPlayer = new Player(req.body);
  newPlayer.save((error, player) => {
     if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(player);
      console.log(player);
    }
  });
};

exports.login = async(req, res) => {
  Admin.findOne(
    {
      userName: req.body.userName,
    },
    (error, user) => {
      if (error) {
        res.status(500).send(error + "........");
      } else if (!user) {
        res.status(405).json(user);
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
        res.json({user,token});
      } 
    }
  );
};

exports.getAllPlayers = async(req, res) => {
    Player.find({}, function (err, players) {
      res.send(players);
    });
}
exports.getAllTournaments = async(req, res) => {
    Tournament.find({}, function (err, players) {
      res.send(players);
    });
}
exports.getAllGroups = async(req, res) => {
    Tournament.findOne(
      {
        tournamentName: req.body.tournamentName,
      },
      function (err, tournament) {
        res.send(tournament);
      }
    );
}
exports.createTournament = async (req, res) => {
  const newTournament = new Tournament(req.body);
  newTournament.save((error, Tournament) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(Tournament);
      console.log(Tournament);
    }
  });
};

exports.addPlayers = (req, res) => {
   const { tournamentName, index, players, scores } = req.body;
console.log(tournamentName, index, players, scores);
 
  // Find the tournament document
   Tournament.findOne({ tournamentName: tournamentName },
     function (error, tournament) {
        console.log(tournament);
         if (error) {
            res.status(500).send(error);
         }else{
            tournament.groupStage[index].players = players;
            tournament.groupStage[index].scores = scores;
            tournament.save();
            res.status(200).send(tournament);
         }    
      });

  // Send a success response
  
};

exports.addGroup = (req, res) => {
  const tournamentName = req.body.tournamentName;
  const groupStage = {
    players: ["player1", "player2", "player3"],
    scores: ["score1", "score2", "score3", "score4", "score5", "score6"],
  };

  Tournament.findOneAndUpdate(
    { tournamentName: tournamentName },
    { $push: { groupStage: groupStage } },
    { new: true },
    (error, tournament) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .send("An error occurred while adding the group stage object.");
      }

      if (!tournament) {
        return res.status(404).send("Tournament not found.");
      }

      res.send(tournament);
    }
  );
}

