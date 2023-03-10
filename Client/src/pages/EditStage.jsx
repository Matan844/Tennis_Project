import FinalStage from "./FinalStage";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { input } from "@material-ui/core";
import { Details } from "./Gamecontext";
import { useContext } from "react";
import { Button } from "@mui/material";
import axios from "axios";
export default function EditStage() {
  const { game, setGame } = useContext(Details);
const [tournament, setTournament] = useState("");
const [tournamentName, setTournamentName] = useState("");
const [tournamentPlace, setTournamentPlace] = useState("");
const [exist, setExist] = useState(false);

const [numOfGroup, setNumOfGroup] = useState(0);
  function handlechangeplayer1(event,index) {
    let gameclone = game;
    gameclone[index].player1 = event;
    setGame({ ...gameclone });
   
  }
  function handlechangeplayer2(event,index) {
    let gameclone = game;
    gameclone[index].player2 = event;
    setGame({ ...gameclone });
  }
  function handlechangeplayer1score(event,index) {
    let gameclone = game;
    gameclone[index].player1score = event;
    setGame({ ...gameclone });
    
  }
  function handlechangeplayer2score(event,index) {
    let gameclone = game;
    gameclone[index].player2score = event;
    setGame({ ...gameclone });
    console.log(game);
   
  }
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
const Update = async () => {
  for (let i = 0; i < game.length; i++) {
    if(game[i].player1||game[i].player2
      ||game[i].player2score||game[i].player1score){
        setExist(true)
      }else{
        i=game.length
        setExist(false)
      }
  }
  if(game){
  await axios
    .post("http://localhost:8000/updateFinals", {
      tournamentName: tournamentName,
      game: game,
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
};
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
    <Box sx={{ width: 1 }} style={{ backgroundColor: "gray" }}>
        
      <h1>?????? ?????????????? ?????????? ??????????</h1>
      {tournament &&
        tournament?.map((t, i) => (
          <button key={i} onClick={() => showTournament(t.tournamentName, i)}>
            {t.tournamentName}
          </button>
        ))}
      <br />
      <button onClick={Update}>?????? ??????????????</button>
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
            player1={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[0]?.player1 || ""
                }
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 0);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[0]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 0);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[0]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 0);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[0]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 0);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[1]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 1);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[1]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 1);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[1]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 1);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[1]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 1);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[2]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 2);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[2]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 2);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[2]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 2);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[2]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 2);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[3]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 3);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[3]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 3);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[3]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 3);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[3]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 3);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[4]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 4);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[4]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 4);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[4]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 4);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[4]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 4);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[5]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 5);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[5]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 5);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[5]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 5);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[5]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 5);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[6]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 6);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[6]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 6);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[6]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 6);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[6]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 6);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[7]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 7);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[7]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 7);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[7]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 7);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[7]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 7);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
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
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[8]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 8);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[8]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 8);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[8]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 8);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[8]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 8);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[9]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 9);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[9]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 9);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[9]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 9);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[9]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 9);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[10]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 10);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[10]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 10);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[10]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 10);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[10]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 10);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[11]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 11);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[11]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 11);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[11]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 11);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[11]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 11);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
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
        <Box gridColumn="span 6">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[12]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 12);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[12]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 12);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[12]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 12);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[12]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 12);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
        <Box gridColumn="span 6">
          <FinalStage
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[13]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 13);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[13]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 13);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[13]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 13);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[13]?.player1score
                }
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 13);
                }}
                placeholder="?????????? ???????? 1"
              />
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
            player1={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[14]?.player1}
                onChange={(e) => {
                  handlechangeplayer1(e.target.value, 14);
                }}
                placeholder="???????? 1"
              />
            }
            player2={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[14]?.player2}
                onChange={(e) => {
                  handlechangeplayer2(e.target.value, 14);
                }}
                placeholder="???????? 2"
              />
            }
            player2score={
              <input
                defaultValue={
                  tournament[tournamentPlace]?.finals[14]?.player2score
                }
                onChange={(e) => {
                  handlechangeplayer2score(e.target.value, 14);
                }}
                placeholder="?????????? ???????? 2"
              />
            }
            player1score={
              <input
                defaultValue={tournament[tournamentPlace]?.finals[14]?.player1score}
                onChange={(e) => {
                  handlechangeplayer1score(e.target.value, 14);
                }}
                placeholder="?????????? ???????? 1"
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
