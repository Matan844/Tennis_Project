import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AllPlayers from "./pages/AllPlayers";
import FinalStage from "./pages/FinalStage";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import TournamentBracket from "./pages/FinalStage";
import STAG from "./pages/STAG";
function App() {
  return (
    <div className="App">
      
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="SignUp">SignUp</NavLink>
        <Routes>
          <Route path="/" element={<STAG />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/AllPlayers" element={<AllPlayers />}></Route>
        </Routes>
     
    </div>
  );
}

export default App;
