import React from "react";
import ScoresDraw from "./ScoresDraw";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ImageMq from "../images/image2.jpg"

const AllScores = () => {
  const [tournament, setTournament] = useState("");
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentPlace, setTournamentPlace] = useState("");
  const [numOfGroup, setNumOfGroup] = useState(0);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:8000/getAllTournaments", {})
      .then((res) => {
        setTournament(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
  const showTournament = async (name, index) => {
    setTournamentName(name);
    setTournamentPlace(index);
    await axios
      .post("http://localhost:8000/getAllGroups", {
        tournamentName: name,
      })
      .then((res) => {
        setNumOfGroup(res.data.groupStage.length);
        console.log(res.data.groupStage.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const timesArray = Array.from(Array(numOfGroup));

  return (
    <div  style={{  backgroundImage: `url(${ImageMq})`,    backgroundSize: "cover" , height:"100vh" }}>
      <Button variant="contained" size="large" onClick={() => navigate("/Scores")} disabled>שלב הבתים</Button>
      <Button variant="contained" size="large" onClick={() => navigate("/EditStage")}>בית הגמר</Button>
      <h1>בחר טורניר </h1>
      {tournament &&
        tournament?.map((t, i) => (
          <Button variant="contained" color="success" sx={{margin:'10px'}} key={i} onClick={() => showTournament(t.tournamentName, i)}>
            {t.tournamentName}
          </Button>
        ))}
        <br/>
      {timesArray.map((_, index) => (
        <ScoresDraw
          key={index}
          tournamentPlace={tournamentPlace}
          tournament={tournament}
          tournamentName={tournamentName}
          groupIndex={index}
          groupName={`בית ${index + 1} `}
        />
      ))}
      <p></p>
    </div>
  );
};

export default AllScores;
