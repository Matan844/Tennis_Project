import { React, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
const AllPlayers = () => {
  const [players, setPlayers] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/getAllPlayers", {})
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const columns = [
    { field: "id", headerName: "מיקום", width: 70 },
    { field: "fullName", headerName: "שם מלא", width: 130 },
    { field: "grade", headerName: "כיתה", width: 70 },
    { field: "dateOfBirth", headerName: "תאריך לידה", width: 100 },
    { field: "playerId", headerName: "ת.ז", width: 100 },
    { field: "medicalCertificate", headerName: "אישור רפואי", width: 90 },
    { field: "category", headerName: "קטגוריה", width: 70 },
    { field: "notes", headerName: "הערות", width: 100 },
  ];
  let rows = [];
  for (let i = 0; i < players?.length; i++) {
    console.log(players[i].medicalCertificate);
    if (players[i].medicalCertificate === "") {
        players[i].medicalCertificate="לא"
    } 
    rows.push({
      id: i + 1,
      fullName: players[i].fullName,
      grade: players[i].grade,
      dateOfBirth: players[i].dateOfBirth,
      playerId: players[i].playerId,
      medicalCertificate: players[i].medicalCertificate,
      category: players[i].category,
      notes: players[i].notes,
    });
  }
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default AllPlayers;
