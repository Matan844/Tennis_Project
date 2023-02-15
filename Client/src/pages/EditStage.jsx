import FinalStage from "./FinalStage";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Input } from "@material-ui/core";
import { Details } from "./Gamecontext";
import { useContext } from "react";

export default function EditStage() {
  const { game, setGame } = useContext(Details);

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
   
  }

  return (
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
            player1={
              <Input
                onChange={(e) => {
                    handlechangeplayer1(e.target.value,0);
                }}
                placeholder="שחקן 1"
              />
            }
            player2={<Input  onChange={(e) => {
                handlechangeplayer2(e.target.value,0);
            }} placeholder="שחקן 2" />}
            player2score={<Input  onChange={(e) => {
                handlechangeplayer2score(e.target.value,0);
            }} placeholder="ניקוד שחקן 2" />}
            player1score={<Input  onChange={(e) => {
                handlechangeplayer1score(e.target.value,0);
            }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
          <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,1);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,1);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,1);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,1);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,2);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,2);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,2);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,2);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,3);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,3);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,3);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,3);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,4);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,4);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,4);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,4);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,5);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,5);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,5);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,5);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,6);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,6);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,6);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,6);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,7);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,7);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,7);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,7);
              }} placeholder="ניקוד שחקן 1" />}
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
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,8);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,8);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,8);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,8);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,9);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,9);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,9);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,9);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,10);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,10);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,10);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,10);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 3">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,11);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,11);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,11);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,11);
              }} placeholder="ניקוד שחקן 1" />}
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
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,12);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,12);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,12);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,12);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
        <Box gridColumn="span 6">
        <FinalStage
            player1={
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,13);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,13);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,13);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,13);
              }} placeholder="ניקוד שחקן 1" />}
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
                <Input
                  onChange={(e) => {
                      handlechangeplayer1(e.target.value,14);
                  }}
                  placeholder="שחקן 1"
                />
              }
              player2={<Input  onChange={(e) => {
                  handlechangeplayer2(e.target.value,14);
              }} placeholder="שחקן 2" />}
              player2score={<Input  onChange={(e) => {
                  handlechangeplayer2score(e.target.value,14);
              }} placeholder="ניקוד שחקן 2" />}
              player1score={<Input  onChange={(e) => {
                  handlechangeplayer1score(e.target.value,14);
              }} placeholder="ניקוד שחקן 1" />}
          />
        </Box>
      </Box>
    </Box>
  );
}
