import FinalStage from "./FinalStage";
import { useContext } from "react";
import Box from "@mui/material/Box";
import EditStage from "./EditStage";
import {Details} from "./Gamecontext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function STAG(params) {
    
    const {game,setGame,token} = useContext(Details);
    const [tournament, setTournament] = useState("");
    const [tournamentName, setTournamentName] = useState("");
    const [tournamentPlace, setTournamentPlace] = useState("");
    const [numOfGroup, setNumOfGroup] = useState(0);
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
  return (
    <div>
      <h1>בחר טורניר </h1>
      <p> {tournament[tournamentPlace]?.finals[0]?.player1}</p>
      {tournament &&
        tournament?.map((t, i) => (
          <button key={i} onClick={() => showTournament(t.tournamentName, i)}>
            {t.tournamentName}
          </button>
        ))}
      <br />
      <Box sx={{ width: 1 }} style={{ backgroundColor: "gray" }}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          style={{
            margin: "30px",
            display: "flex",
            justifyContent: "center",
            justifyContent: "space-around",
          }}
        >
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[0].player1}
              player2={tournament[tournamentPlace]?.finals[0].player2}
              player1score={tournament[tournamentPlace]?.finals[0].player1score}
              player2score={tournament[tournamentPlace]?.finals[0].player2score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[1].player1}
              player2={tournament[tournamentPlace]?.finals[1].player2}
              player2score={tournament[tournamentPlace]?.finals[1].player2score}
              player1score={tournament[tournamentPlace]?.finals[1].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[2].player1}
              player2={tournament[tournamentPlace]?.finals[2].player2}
              player2score={tournament[tournamentPlace]?.finals[2].player2score}
              player1score={tournament[tournamentPlace]?.finals[2].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[3].player1}
              player2={tournament[tournamentPlace]?.finals[3].player2}
              player2score={tournament[tournamentPlace]?.finals[3].player2score}
              player1score={tournament[tournamentPlace]?.finals[3].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[4].player1}
              player2={tournament[tournamentPlace]?.finals[4].player2}
              player2score={tournament[tournamentPlace]?.finals[4].player2score}
              player1score={tournament[tournamentPlace]?.finals[4].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[5].player1}
              player2={tournament[tournamentPlace]?.finals[5].player2}
              player2score={tournament[tournamentPlace]?.finals[5].player2score}
              player1score={tournament[tournamentPlace]?.finals[5].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[6].player1}
              player2={tournament[tournamentPlace]?.finals[6].player2}
              player2score={tournament[tournamentPlace]?.finals[6].player2score}
              player1score={tournament[tournamentPlace]?.finals[6].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[7].player1}
              player2={tournament[tournamentPlace]?.finals[7].player2}
              player2score={tournament[tournamentPlace]?.finals[7].player2score}
              player1score={tournament[tournamentPlace]?.finals[7].player1score}
            />
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          style={{
            margin: "30px",
            display: "flex",
            justifyContent: "center",
            justifyContent: "space-around",
          }}
        >
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[8].player1}
              player2={tournament[tournamentPlace]?.finals[8].player2}
              player2score={tournament[tournamentPlace]?.finals[8].player2score}
              player1score={tournament[tournamentPlace]?.finals[8].player1score}
            />{" "}
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[9].player1}
              player2={tournament[tournamentPlace]?.finals[9].player2}
              player2score={tournament[tournamentPlace]?.finals[9].player2score}
              player1score={tournament[tournamentPlace]?.finals[9].player1score}
            />{" "}
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[10].player1}
              player2={tournament[tournamentPlace]?.finals[10].player2}
              player2score={
                tournament[tournamentPlace]?.finals[10].player2score
              }
              player1score={
                tournament[tournamentPlace]?.finals[10].player1score
              }
            />{" "}
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[11].player1}
              player2={tournament[tournamentPlace]?.finals[11].player2}
              player2score={
                tournament[tournamentPlace]?.finals[11].player2score
              }
              player1score={
                tournament[tournamentPlace]?.finals[11].player1score
              }
            />{" "}
          </Box>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          style={{
            margin: "30px",
            display: "flex",
            justifyContent: "center",
            justifyContent: "space-around",
          }}
        >
          <Box gridColumn="span 6">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[12].player1}
              player2={tournament[tournamentPlace]?.finals[12].player2}
              player2score={
                tournament[tournamentPlace]?.finals[12].player2score
              }
              player1score={
                tournament[tournamentPlace]?.finals[12].player1score
              }
            />
          </Box>
          <Box gridColumn="span 6">
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[13].player1}
              player2={tournament[tournamentPlace]?.finals[13].player2}
              player2score={
                tournament[tournamentPlace]?.finals[13].player2score
              }
              player1score={
                tournament[tournamentPlace]?.finals[13].player1score
              }
            />
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box
            gridColumn="span 12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <FinalStage
              player1={tournament[tournamentPlace]?.finals[14].player1}
              player2={tournament[tournamentPlace]?.finals[14].player2}
              player2score={
                tournament[tournamentPlace]?.finals[14].player2score
              }
              player1score={
                tournament[tournamentPlace]?.finals[14].player1score
              }
            />
          </Box>
        </Box>
      </Box>
      {/* //   )})} */}
     {token&&<EditStage />} 
      <button>submit</button>
    </div>
  );
}


