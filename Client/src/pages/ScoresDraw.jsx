import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";


const ScoresDraw = ({
  tournament,
  tournamentPlace,
  tournamentName,
  groupIndex,
  groupName,
}) => {
  console.log(tournament);
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
      <h7 sx={{ fontWeight: "bold" }} align="center">
        {groupName}
      </h7>
      <Table sx={{ direction: "rtl" }} >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              שם השחקן
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[0]}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[1]}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[2]}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ fontWeight: "bold" }}
              align="center"
            >
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[0]}
            </TableCell>
            <TableCell align="center">-</TableCell>
            <TableCell align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[0]}
            </TableCell>
            <TableCell align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[1]}
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ fontWeight: "bold" }}
              align="center"
            >
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[1]}
            </TableCell>
            <TableCell align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[2]}
            </TableCell>
            <TableCell align="center">-</TableCell>
            <TableCell align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[3]}
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              sx={{ fontWeight: "bold" }}
              align="center"
            >
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.players[2]}
            </TableCell>
            <TableCell align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[4]}
            </TableCell>
            <TableCell align="center">
              {tournament[tournamentPlace]?.groupStage[groupIndex]?.scores[5]}
            </TableCell>
            <TableCell align="center">-</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoresDraw;
