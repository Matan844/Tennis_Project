import React from "react";
import TournamentCard from "./TournamentCard";
import ImageM from "../images/Image1.png";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${ImageM})`,
       minHeight:"100vh",
        width: "100%",
        backgroundSize: 'cover'
      }}
    >
      <Typography variant="h3">תחרויות פעילות</Typography >
      <TournamentCard  />
    </div>
  );
};

export default HomePage;
