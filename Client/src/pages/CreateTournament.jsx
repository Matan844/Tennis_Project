import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Box, TextField, Button, FormLabel } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignUp.css"
const theme = createTheme({
  direction: "rtl",
});
const CreateTournament = (props) => {
    const navigate=useNavigate()
    const [tournamentName,setTournamentName]=useState()
    const [dateStart,setDateStart]=useState()
    const [dateFinish, setDateFinish] = useState();
    const [players, setPlayers] = useState(["player1", "player2", "player3"]);
    const [scores, setScores] = useState([
      "score1",
      "score2",
      "score3",
      "score4",
      "score5",
      "score6",
    ]);
    const handleSubmit = async () => {
      await axios
        .post("http://localhost:8000/createTournament", {
          tournamentName,
          dateStart,
          dateFinish,
          groupStage: { players, scores },
          finals: { players, scores },
        })
        .then((res) => {
          console.log(res.data);
          navigate("/AllGroupStages");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Box sx={{ maxWidth: 400 }}>
          <form className="form" onSubmit={handleSubmit}>
            <FormLabel>שם הטורניר</FormLabel>
            <TextField
              fullWidth
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              sx={{ mt: 2, mb: 1 }}
            />
            <FormLabel>תאריך התחלה</FormLabel>
            <TextField
              fullWidth
              type="date"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
              sx={{ mt: 1, mb: 1 }}
            />
            <FormLabel>תאריך סיום</FormLabel>
            <TextField
              fullWidth
              type="date"
              value={dateFinish}
              onChange={(e) => setDateFinish(e.target.value)}
              sx={{ mt: 1, mb: 2 }}
            />
            <Button variant="contained" type="submit">
              צור את הטורניר
            </Button>
          </form>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default CreateTournament