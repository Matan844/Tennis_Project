import './App.css';
import Tournament from './Tournament';
import Tableparticipants from './Tableparticipants';
import NewTournament from './NewTournament'
import CustomizedTables from './GroupStage'
function App() {
  return (
    <div className="App" dir='rtl'>
        {/* <Tournament></Tournament>
        <Tableparticipants></Tableparticipants>
        <NewTournament></NewTournament> */}
        <CustomizedTables></CustomizedTables>
    </div>
  );
}

export default App;
