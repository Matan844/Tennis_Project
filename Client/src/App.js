import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import AllPlayers from './pages/AllPlayers';
import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import GroupStage from './pages/GroupStage';
import CreateTournament from './pages/CreateTournament';
import AllGroupStages from './pages/AllGroupStages';
function App() {
  return (
    <div className="App">
      <NavLink to="/CreateTournament">צור טורניר</NavLink>
      <NavLink to="/AllPlayers">טבלת שחקנים</NavLink>
      <NavLink to="/AllGroupStages">עריכת שלב הבתים</NavLink>
      <Routes>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/AllPlayers" element={<AllPlayers />}></Route>
        <Route path="/AllGroupStages" element={<AllGroupStages />}></Route>
        <Route path="/CreateTournament" element={<CreateTournament />}></Route>
      </Routes>
    </div>
  );
}

export default App;
