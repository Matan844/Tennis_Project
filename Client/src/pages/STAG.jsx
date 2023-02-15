import FinalStage from "./FinalStage";
import { useContext } from "react";
import Box from "@mui/material/Box";
import EditStage from "./EditStage";
import {Details} from "./Gamecontext";

export default function STAG(params) {
    
    const {game,setGame} = useContext(Details);
    const {checker,setchecker} = useContext(Details);

  return (
    <div>
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
              player1={game[0].player1}
              player2={game[0].player2}
              player1score={game[0].player1score}
              player2score={game[0].player2score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
          player1={game[1].player1}
          player2={game[1].player2}
          player2score={game[1].player2score}
          player1score={game[1].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
            player1={game[2].player1}
            player2={game[2].player2}
            player2score={game[2].player2score}
            player1score={game[2].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
                  player1={game[3].player1}
                  player2={game[3].player2}
                  player2score={game[3].player2score}
                  player1score={game[3].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
                player1={game[4].player1}
                player2={game[4].player2}
                player2score={game[4].player2score}
                player1score={game[4].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
                     player1={game[5].player1}
                     player2={game[5].player2}
                     player2score={game[5].player2score}
                     player1score={game[5].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={game[6].player1}
              player2={game[6].player2}
              player2score={game[6].player2score}
              player1score={game[6].player1score}
            />
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
           player1={game[7].player1}
           player2={game[7].player2}
           player2score={game[7].player2score}
           player1score={game[7].player1score}
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
               player1={game[8].player1}
               player2={game[8].player2}
               player2score={game[8].player2score}
               player1score={game[8].player1score}
            />{" "}
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
       player1={game[9].player1}
       player2={game[9].player2}
       player2score={game[9].player2score}
       player1score={game[9].player1score}
            />{" "}
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
           player1={game[10].player1}
           player2={game[10].player2}
           player2score={game[10].player2score}
           player1score={game[10].player1score}
            />{" "}
          </Box>
          <Box gridColumn="span 3">
            <FinalStage
              player1={game[11].player1}
              player2={game[11].player2}
              player2score={game[11].player2score}
              player1score={game[11].player1score}
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
               player1={game[12].player1}
               player2={game[12].player2}
               player2score={game[12].player2score}
               player1score={game[12].player1score}
            />
          </Box>
          <Box gridColumn="span 6">
            <FinalStage
               player1={game[13].player1}
               player2={game[13].player2}
               player2score={game[13].player2score}
               player1score={game[13].player1score}
            />
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box
            gridColumn="span 12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <FinalStage
          player1={game[14].player1}
          player2={game[14].player2}
          player2score={game[14].player2score}
          player1score={game[14].player1score}
            />
          </Box>
        </Box>
      </Box>
    {/* //   )})} */}
      <EditStage />
      <button>submit</button>
    </div>
  );
}


