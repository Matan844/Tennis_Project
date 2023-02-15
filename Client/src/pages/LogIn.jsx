import {React,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Details } from "./Gamecontext";
import { useContext } from "react";

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
    <div>
      <h1>התחבר כדי לנהל את התחרות</h1>
      <input placeholder="שם משתמש" onChange={(e)=>setUserName(e.target.value)}></input>
      <input placeholder="סיסמא" onChange={(e)=>setPassword(e.target.value)}></input>
    <button onClick={handleSubmit}>התחבר</button>
    </div>
  )
}

export default LogIn