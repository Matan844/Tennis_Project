import {React,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Details } from "./Gamecontext";
import { useContext } from "react";
import { Box, TextField, Button, FormLabel } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignUp.css"
const theme = createTheme({
  direction: "rtl",
});

const LogIn = () => {
  const { token, setToken } = useContext(Details);
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
  const handleSubmit=async()=>{
    await axios
      .post("http://localhost:8000/login", {
        userName,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token)
        navigate("/AllPlayers");
      })
      .catch((error) => {});
  }
  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <Box sx={{ maxWidth: 400, display: "flex", justifyContent: "center" }}>
          <form className="form" onSubmit={handleSubmit}>
            <FormLabel>שם הטורניר</FormLabel>
            <TextField
              fullWidth
              onChange={(e) => setTournamentName(e.target.value)}
              sx={{ mt: 2, mb: 1 }}
            />
            <FormLabel> תאריך התחלה</FormLabel>
            <TextField
              fullWidth
              type="date"
              onChange={(e) => setDateStart(e.target.value)}
              sx={{ mt: 1, mb: 1 }}
            />
            <FormLabel>תאריך סיום</FormLabel>
            <TextField
              fullWidth
              type="date"
              onChange={(e) => setDateFinish(e.target.value)}
              sx={{ mt: 1, mb: 2 }}
            />
            <Button variant="contained" type="submit">
              צור את הטורניר
            </Button>
          </form>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LogIn