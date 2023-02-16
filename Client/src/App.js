
import { NavLink, Route, Routes } from 'react-router-dom';
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
function App() {
  const { token } = useContext(Details);
  return (
    <div className="App">
      {token && <NavLink to="/CreateTournament">צור טורניר</NavLink>}
      {token && <NavLink to="/AllPlayers">טבלת שחקנים</NavLink>}
      {token && <NavLink to="/AllGroupStages">עריכת שלב הבתים</NavLink>}
      <NavLink to="/">עמוד הבית</NavLink>
      <NavLink to="/Scores">תוצאות</NavLink>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/EditStage" element={<STAG />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/admin" element={<LogIn />}></Route>
        <Route path="/AllPlayers" element={<AllPlayers />}></Route>
        <Route path="/AllGroupStages" element={<AllGroupStages />}></Route>
        <Route path="/CreateTournament" element={<CreateTournament />}></Route>
      </Routes>
    </div>
  );
}

export default App;
