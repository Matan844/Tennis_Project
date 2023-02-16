import FinalStage from "./FinalStage";
import { useContext } from "react";
import Box from "@mui/material/Box";
import EditStage from "./EditStage";
import {Details} from "./Gamecontext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageMq from "../images/image2.jpg"
export default function STAG(params) {
    
    const {game,setGame,token} = useContext(Details);
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
  return (
    <div style={{  backgroundImage: `url(${ImageMq})`,    backgroundSize: "cover" }}>
        <Button variant="contained" size="large" onClick={() => navigate("/Scores")} >שלב הבתים</Button>
      <Button variant="contained" size="large" onClick={() => navigate("/EditStage")} disabled>בית הגמר</Button>
      <h1>בחר טורניר </h1>
      {tournament &&
        tournament?.map((t, i) => (
            <Button variant="contained" color="success" sx={{margin:'10px'}} key={i} onClick={() => showTournament(t.tournamentName, i)}>
            {t.tournamentName}
          </Button>
        ))}
      <br />
      <Box sx={{ width: 1 }} style={{ backgroundColor: "none"
    , height:"100vh" , backgroundSize: 'cover'}}>
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
    </div>
  );
}


