import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect,useState } from "react";
import axios from "axios";
export default function TournamentCard() {
const [tournament,setTournament]= useState([{}])
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
  }, []);

  return (
   <div >
   <Card sx={{ minWidth: "100%", width: "10px" , display:'flex', flexDirection: 'row', marginLeft: '20px' ,background:'transparent' ,flexWrap: 'wrap' , justifyContent:'center', justifyContent:'space-around',}} dir="rtl">
    {tournament?.map((singletournament,index)=>{
     return <div style={{  margin: '20px' , backgroundColor:' rgb(255,255,255,0.8)'}} key={index} >
      <CardContent sx={{  margin: '20px'}}>
        <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
        מ:{singletournament?.dateStart}
        </Typography>
        <Typography variant="h5" component="div">
        {singletournament?.tournamentName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          מרכזי הטניס של ישראל
        </Typography>
        <Typography variant="body2">
          גילאים 6-9
          <br />
          קטגוריה: מיני טניס
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ראה עוד</Button>
      </CardActions>
      </div>
    })}
    </Card>
    </div>);
}
