import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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
    const Create=async()=>{
        await axios
          .post("http://localhost:8000/createTournament", {
            tournamentName,
            dateStart,
            dateFinish,
            groupStage:{players,scores}
          })
          .then((res) => {
            console.log(res.data);
            navigate("/AllGroupStages")
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
    <div>
      <label>שם הטורניר</label>
      <input onChange={(e) => setTournamentName(e.target.value)} />
      <label>תאריך התחלה</label>
      <input type="date" onChange={(e) => setDateStart(e.target.value)} />
      <label>תאריך סוף</label>
      <input type="date" onChange={(e) => setDateFinish(e.target.value)} />
      <button onClick={Create}>צור את הטורניר</button>
    </div>
  );
}

export default CreateTournament