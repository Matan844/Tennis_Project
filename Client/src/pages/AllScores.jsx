import React from "react";
import ScoresDraw from "./ScoresDraw";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
    <div>
      <h1>בחר טורניר </h1>
      {tournament &&
        tournament?.map((t, i) => (
          <button key={i} onClick={() => showTournament(t.tournamentName, i)}>
            {t.tournamentName}
          </button>
        ))}
        <br/>
      <button onClick={() => navigate("/Scores")}>שלב הבתים</button>
      <button onClick={() => navigate("/EditStage")}>בית הגמר</button>
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
