import {React,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Details } from "./Gamecontext";
import { useContext } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";



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
        navigate("/");
      })
      .catch((error) => {});
  }

  return (
    <Card sx={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", width: 400 }}>
      <CardContent>
        <h1>התחבר כדי לנהל את התחרות</h1>
        <TextField
          fullWidth
          label="שם משתמש"
          variant="outlined"
          margin="normal"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          fullWidth
          label="סיסמא"
          variant="outlined"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          התחבר
        </Button>
      </CardContent>
    </Card>
  );
}

export default LogIn