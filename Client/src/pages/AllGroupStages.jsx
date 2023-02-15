import React from 'react'
import GroupStage from './GroupStage'
import axios from 'axios'
import { useState,useEffect } from 'react'
const AllGroupStages = () => {
    const [tournament, setTournament] = useState("");
    const [tournamentName, setTournamentName] = useState("");
    const [tournamentPlace, setTournamentPlace] = useState("");
    const [numOfGroup, setNumOfGroup] = useState(0);
    const [show, setShow] = useState(0);
     useEffect(() => {
       axios
         .get("http://localhost:8000/getAllTournaments", {})
         .then((res) => {
           setTournament(res.data);
           console.log(res.data);
         })
         .catch((error) => {
           console.log(error);
         });
     }, [show]);
    const AddGroup=async(name)=>{
        await axios
          .post("http://localhost:8000/addGroup", {
            tournamentName: name,
          })
          .then((res) => {
            setNumOfGroup(numOfGroup + 1);
            console.log(res.data.groupStage);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    const showTournament=async(name,index)=>{
        setTournamentName(name)
        setTournamentPlace(index)
        await axios
          .post("http://localhost:8000/getAllGroups", {
            tournamentName: name,
          })
          .then((res) => {
            setNumOfGroup(res.data.groupStage.length);
            console.log(res.data.groupStage.length);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    
        const timesArray = Array.from(Array(numOfGroup));

  return (
    <div>
      <h1>בחר בטורניר שתרצה לערוך</h1>
      {tournament &&
        tournament?.map((t, i) => (
         
            <button key={i} onClick={() => showTournament(t.tournamentName, i)}>
              {t.tournamentName}
            </button>
   
        ))}
      {timesArray.map((_, index) => (
        <GroupStage
          key={index}
          tournamentPlace={tournamentPlace}
          tournament={tournament}
          tournamentName={tournamentName}
          groupIndex={index}
          groupName={`בית ${index + 1} `}
        />
      ))}
   <p>  <button onClick={() => AddGroup(tournamentName)}>הוסף בית</button></p> 
    </div>
  );
}

export default AllGroupStages