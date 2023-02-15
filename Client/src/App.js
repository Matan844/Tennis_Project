import './App.css';
import Tournament from './Tournament';
import Tableparticipants from './Tableparticipants';
import NewTournament from './NewTournament'
function App() {
  return (
    <div className="App" dir='rtl'>
        <Tournament></Tournament>
        <Tableparticipants></Tableparticipants>
        <NewTournament></NewTournament>
    </div>
  );
}

export default App;
