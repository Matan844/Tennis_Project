import React from 'react'
import { useState } from 'react';
import "./SignUp.css";
import axios from 'axios'
import {
  FormLabel,
  Input,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
const SignUp2 = () => {
   const [data,setData]=useState("")
   const [fullName, setFullName] = useState("");
   const [grade,setGrade]=useState("")
   const [dateOfBirth,setDateOfBirth]=useState("")
   const [playerId,setPlayerId]=useState("")
   const [category,setCategory]=useState("")
   const [medicalCertificate, setMedicalCertificate] = useState("");
   const [notes,setNotes]=useState("")
   const handleSubmit=async(e)=>{
    
      e.preventDefault();
    await axios
      .post("http://localhost:8000/register", {
        fullName,
        grade,
        dateOfBirth,
        playerId,
        medicalCertificate,
        category,
        notes,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
    
    
  return (
    <div className="form-wrapper">
      <form className="form">
        <h1> הרשמה לתחרות</h1>
        <FormLabel>
          <Input
            onChange={(e) => setFullName(e.target.value)}
            placeholder="שם מלא"
          ></Input>
        </FormLabel>
        <label>
          <Input
            onChange={(e) => setGrade(e.target.value)}
            placeholder=" כיתה"
          ></Input>
        </label>
        <label>
          <Input
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            placeholder="n "
          ></Input>
        </label>
        <label>
          <Input
            onChange={(e) => setPlayerId(e.target.value)}
            placeholder="תעודת זהות"
          ></Input>
        </label>
        <label>
          <FormGroup>
            <FormControlLabel
            
              control={
                <Switch
                  onChange={(e) => setMedicalCertificate(e.target.value==="on"?"כן":"לא")}
                />
              }
              label="אישור רפואי"
              labelPlacement="end"
            />
          </FormGroup>
        </label>
        <label>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              קטגוריה
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="קטגוריה"
            >
              <MenuItem value={"מיני טניס (כיתות א'-ג') - כדור אדום"}>
                מיני טניס (כיתות א'-ג') - כדור אדום
              </MenuItem>
              <MenuItem value={"מיני טניס (כיתות ד'-ו') - כדור אדום"}>
                מיני טניס (כיתות ד'-ו') - כדור אדום
              </MenuItem>
              <MenuItem value={"שלושת רבע (כיתות ב'-ד') - כדור כתום"}>
                שלושת רבע (כיתות ב'-ד') - כדור כתום
              </MenuItem>
              <MenuItem value={"שלושת רבע (כיתות ה'-ו') - כדור ירוק"}>
                שלושת רבע (כיתות ה'-ו') - כדור ירוק
              </MenuItem>
              <MenuItem value={"שלושת רבע (כיתות ז'-ט') - כדור ירוק"}>
                שלושת רבע (כיתות ז'-ט') - כדור ירוק
              </MenuItem>
              <MenuItem value={"בנים/בנות גילאי 10 - כדור ירוק"}>
                בנים/בנות גילאי 10 - כדור ירוק
              </MenuItem>
              <MenuItem value={"בנים/בנות גילאי 12 - כדור צהוב (מלא)"}>
                בנים/בנות גילאי 12 - כדור צהוב (מלא)
              </MenuItem>
              <MenuItem value={"בנים/בנות גילאי 14 - כדור צהוב (מלא)"}>
                בנים/בנות גילאי 14 - כדור צהוב (מלא)
              </MenuItem>
              <MenuItem value={"בנים/בנות גילאי 16-18 - כדור צהוב (מלא)"}>
                בנים/בנות גילאי 16-18 - כדור צהוב (מלא)
              </MenuItem>
            </Select>
          </FormControl>
        </label>
        <label>
          <Input
            onChange={(e) => setNotes(e.target.value)}
            placeholder="הערות"
          ></Input>
        </label>
        <Button onClick={(e) => handleSubmit(e)}>הירשם</Button>
      </form>
    </div>
  );
}

export default SignUp2