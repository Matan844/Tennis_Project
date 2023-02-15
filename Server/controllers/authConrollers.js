const Player = require("../models/Player");
const Admin=require("../models/Admin")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
          console.log(req.body.playerId);

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