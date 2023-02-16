import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Details } from "./Gamecontext"
import { useContext } from "react";
export default function TournamentCard() {

  const { token } = useContext(Details);

const [tournament,setTournament]= useState([{}])
const navigate=useNavigate()

 const [open, setOpen] = useState(false);

 const handleClickOpen = () => {
   setOpen(true);
 };

 const handleClose = () => {
   setOpen(false);
 };
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
const goTo=()=>{
navigate("/Scores")
}
const deleteTournament=(name)=>{
  axios
    .post("http://localhost:8000/deleteTournament", {name})
    .then((res) => {
      setTournament(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
  return (
    <div>
      <Card
        sx={{
          minWidth: "100%",
          width: "10px",
          display: "flex",
          flexDirection: "row",
          marginLeft: "20px",
          background: "transparent",
          flexWrap: "wrap",
          justifyContent: "center",
          justifyContent: "space-around",
        }}
        dir="rtl"
      >
        {tournament &&
          tournament?.map((singletournament, index) => {
            return (
              <div
                style={{
                  margin: "20px",
                  backgroundColor: " rgb(255,255,255,0.8)",
                }}
                key={index}
              >
                <CardContent sx={{ margin: "20px" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
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
                  <Button size="small" onClick={goTo}>
                    ראה עוד
                  </Button>

                 {token&&<Button

                    variant="contained"
                    color="secondary"
                    onClick={handleClickOpen}
                  >
                    מחק טורניר
                  </Button>}
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>וידוא מחיקה</DialogTitle>
                    <DialogContent>
                      <p>האם אתה בטוח שאתה רוצה למחוק את הטורניר? <br/>
                      כל המידע ימחק ביחד איתו</p>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        בטל
                      </Button>
                      <Button
                        onClick={() =>
                          deleteTournament(singletournament?.tournamentName)
                        }
                        color="secondary"
                      >
                        מחק 
                      </Button>
                    </DialogActions>
                  </Dialog>
                </CardActions>
              </div>
            );
          })}
      </Card>
    </div>
  );
}
