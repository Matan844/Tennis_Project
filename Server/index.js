const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authController = require("./controllers/authConrollers");
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://Roeiu100:12345@cluster0.1opkabo.mongodb.net/myFirstDatabase",
    {}
  )
  .then(() => console.log("you are connected"))
  .catch((error) => {
    console.log(error);
    console.log("you failed to connect");
  });
app.use(bodyParser.json());
app.use(cors());
app.post("/register", authController.register);
app.post("/login", authController.login);
app.get("/getAllPlayers", authController.getAllPlayers);
app.post("/createTournament", authController.createTournament);
app.post("/addPlayers", authController.addPlayers);
app.post("/updateFinals", authController.updateFinals);
app.post("/addGroup", authController.addGroup);
app.get("/getAllTournaments", authController.getAllTournaments);
app.post("/getAllGroups", authController.getAllGroups);
app.listen(8000, () => console.log("listening on port 8000"));
