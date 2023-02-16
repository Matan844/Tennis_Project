import {useState,React} from "react";
import "./GroupStage.css";
import axios from "axios";

export default function GroupStage({
  tournament,
  tournamentPlace,
  tournamentName,
  groupIndex,
  groupName,
}) {
  const [players, setPlayers] = useState(["player1", "player2", "player3"]);
  const [scores, setScores] = useState([
    "score1",
    "score2",
    "score3",
    "score4",
    "score5",
    "score6",
  ]);
  const EditPlayers = (index, playerName) => {
    const updatedList = [...players];
    updatedList[index] = playerName;
    setPlayers(updatedList);
  };
  const EditScores = (index, score) => {
    const updatedList = [...scores];
    updatedList[index] = score;
    setScores(updatedList);
  };
  const Update = async () => {
    await axios
      .post("http://localhost:8000/addPlayers", {
        tournamentName: tournamentName,
        index: groupIndex,
        players,
        scores,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (

    <div >

      <button onClick={Update}>אשר שינויים</button>
      <table>
        <thead>
          <tr>
            <th>{groupName}</th>
            <th>שם השחקן</th>
            <th>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]
                    ?.players[0]
                }
                onChange={(e) => EditPlayers(0, e.target.value)}
              />
            </th>
            <th>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]
                    ?.players[1]
                }
                onChange={(e) => EditPlayers(1, e.target.value)}
              />
            </th>
            <th>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]
                    ?.players[2]
                }
                onChange={(e) => EditPlayers(2, e.target.value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[0]}
            </td>
            <td>X</td>
            <td>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[0]
                }
                onChange={(e) => EditScores(0, e.target.value)}
              />
            </td>
            <td>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]
                    ?.scores[1]
                }
                onChange={(e) => EditScores(1, e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[1]}
            </td>
            <td>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[2]
                }
                onChange={(e) => EditScores(2, e.target.value)}
              />
            </td>
            <td>X</td>
            <td>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[3]
                }
                onChange={(e) => EditScores(3, e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[2]}
            </td>
            <td>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[4]
                }
                onChange={(e) => EditScores(4, e.target.value)}
              />
            </td>
            <td>
              <input
                defaultValue={
                  tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[5]
                }
                onChange={(e) => EditScores(5, e.target.value)}
              />
            </td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
