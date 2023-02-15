import React, { useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from "@mui/material";
import axios from 'axios';
import './SignUp.css';

function SignUp() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    grade: "",
    dateOfBirth: "",
    playerId: "",
    medicalCertificate: false,
    category: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    grade: "",
    dateOfBirth: "",
    playerId: "",
    category: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      console.log(formValues);
       await axios
         .post("http://localhost:8000/register", {
           fullName: formValues.fullName,
           grade: formValues.grade,
           dateOfBirth: formValues.dateOfBirth,
           playerId: formValues.playerId,
           medicalCertificate: formValues.medicalCertificate ? "כן" : "לא",
           category: formValues.category,
           notes: formValues.notes,
         })
         .then((res) => {
           console.log(res.data);
         })
         .catch((err) => {
           console.log(err);
         });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (formValues.fullName.trim() === "") {
      errors.fullName = "שם מלא הוא שדה חובה";
    }
    if (formValues.grade.trim().length >3||
    !isNaN(formValues.grade.trim())) {
      errors.grade = "כיתה היא שדה חובה";
    }
    if (formValues.dateOfBirth.trim() === "") {
      errors.dateOfBirth = "תאריך לידה הוא שדה חובה";
    }
    if (
      formValues.playerId.trim().length !== 9 ||
      isNaN(formValues.playerId.trim()) 
    ) {
      errors.playerId = " תעודת זהות הוא שדה חובה";
    }
    if (formValues.category.trim() === "") {
      errors.category = "קטגוריה היא שדה חובה";
    }
    return errors;
  };

  return (
    <div className="form-container">
     
      {!formSubmitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1>הרשמה לאליפות תל אביב</h1>
          <div className="form-element">
            <InputLabel htmlFor="fullName">שם מלא</InputLabel>
            <TextField
              type="text"
              id="fullName"
              name="fullName"
              value={formValues.fullName}
              onChange={handleInputChange}
            />
            {formErrors.fullName && (
              <span className="error-message">{formErrors.fullName}</span>
            )}
          </div>
          <div className="form-element">
            <InputLabel htmlFor="grade">כיתה</InputLabel>
            <Select
              id="grade"
              name="grade"
              value={formValues.grade}
              onChange={handleInputChange}
            >
              <MenuItem value={"א"}>א</MenuItem>
              <MenuItem value={"ב"}>ב</MenuItem>
              <MenuItem value={"ג"}>ג</MenuItem>
              <MenuItem value={"ד"}>ד</MenuItem>
              <MenuItem value={"ה"}>ה</MenuItem>
              <MenuItem value={"ו"}>ו</MenuItem>
              <MenuItem value={"ז"}>ז</MenuItem>
              <MenuItem value={"ח"}>ח</MenuItem>
              <MenuItem value={"ט"}>ט</MenuItem>
              <MenuItem value={"י"}>י</MenuItem>
              <MenuItem value={"יא"}>יא</MenuItem>
              <MenuItem value={"יב"}>יב</MenuItem>
            </Select>
            {formErrors.grade && (
              <span className="error-message">{formErrors.grade}</span>
            )}
          </div>
          <div className="form-element">
            <InputLabel htmlFor="dateOfBirth">תאריך לידה</InputLabel>
            <TextField
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formValues.dateOfBirth}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formErrors.dateOfBirth && (
              <span className="error-message">{formErrors.dateOfBirth}</span>
            )}
          </div>
          <div className="form-element">
            <InputLabel htmlFor="playerId">תעודת זהות </InputLabel>
            <TextField
              type="text"
              id="playerId"
              name="playerId"
              value={formValues.playerId}
              onChange={handleInputChange}
            />
            {formErrors.playerId && (
              <span className="error-message">{formErrors.playerId}</span>
            )}
          </div>
          <div className="form-element">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.medicalCertificate}
                  onChange={handleInputChange}
                  name="medicalCertificate"
                />
              }
              label="אישור רפואי"
            />
          </div>
          <div className="form-element">
            <InputLabel htmlFor="category">קטגוריה</InputLabel>
            <Select
              id="category"
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
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
            {formErrors.category && (
              <span className="error-message">{formErrors.category}</span>
            )}
          </div>
          <div className="form-element">
            <InputLabel htmlFor="notes">הערות</InputLabel>
            <TextField
              multiline
              id="notes"
              name="notes"
              value={formValues.notes}
              onChange={handleInputChange}
            />
          </div>
          <Button variant="contained" color="primary" type="submit">
            הירשם
          </Button>
        </form>
      ) : (
       
        <Alert className='form' severity="success">
          <AlertTitle></AlertTitle>
          תודה רבה! ההרשמה בוצעה בהצלחה.
        </Alert>
   
      )}
    </div>
  );
}

export default SignUp;
