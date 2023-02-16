
import { Route, Routes } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import './App.css';
import AllPlayers from './pages/AllPlayers';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import GroupStage from './pages/GroupStage';
import CreateTournament from './pages/CreateTournament';
import AllGroupStages from './pages/AllGroupStages';
import { Details } from "./pages/Gamecontext"
import { useContext } from "react";
import STAG from './pages/STAG';
import AllScores from './pages/AllScores';
function App() {
  const { token } = useContext(Details);
  const StyledLink = styled(Link)({
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  });

  const StyledButton = styled(Button)({
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "lightgray",
      textDecoration: "none",
    },
  });
  return (
    <div className="App">

      <AppBar position="static" sx={{ backgroundColor: "#253B6E" }}>
        <Toolbar sx={{ justifyContent: "center", direction: "rtl" }}>
          <Typography
            variant="h6"
            component={StyledLink}
            to="/HomePage"
            sx={{ fontWeight: "bold" }}
          >
            עמוד הבית
          </Typography>
          <div>
            <StyledButton color="inherit" component={NavLink} to="/Scores">
              תוצאות
            </StyledButton>
            {token && (
              <>
                <StyledButton
                  color="inherit"
                  component={NavLink}
                  to="/CreateTournament"
                >
                  צור טורניר
                </StyledButton>
                <StyledButton
                  color="inherit"
                  component={NavLink}
                  to="/AllPlayers"
                >
                  טבלת שחקנים
                </StyledButton>
                <StyledButton
                  color="inherit"
                  component={NavLink}
                  to="/AllGroupStages"
                >
                  עריכת שלב הבתים
                </StyledButton>
                <StyledButton
                  color="inherit"
                  component={NavLink}
                  to="/EditStage"
                >
                  עריכת  בית הגמר
                </StyledButton>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/EditStage" element={<STAG />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/admin" element={<LogIn />}></Route>
        <Route path="/AllPlayers" element={<AllPlayers />}></Route>
        <Route path="/Scores" element={<AllScores />}></Route>
        <Route path="/AllGroupStages" element={<AllGroupStages />}></Route>
        <Route path="/CreateTournament" element={<CreateTournament />}></Route>
      </Routes>
    </div>
  );
}

export default App;
