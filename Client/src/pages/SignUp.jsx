import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel
} from '@material-ui/core';
import "./SignUp.css"
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    grade: '',
    dateOfBirth: '',
    playerId: '',
    medicalCertificate: false,
    category: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form data
      console.log(formData);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.fullName) errors.fullName = 'Full name is required';
    if (!data.grade) errors.grade = 'Grade is required';
    if (!data.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
    if (!data.playerId) errors.playerId = 'Player ID is required';
    if (!data.medicalCertificate) errors.medicalCertificate = 'Medical certificate is required';
    if (!data.category) errors.category = 'Category is required';
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={!!errors.fullName}
        helperText={errors.fullName}
        margin="normal"
      
      />
      <TextField
        label="Grade"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
        error={!!errors.grade}
        helperText={errors.grade}
        margin="normal"
     
      />
      <TextField
        label="Date of Birth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        error={!!errors.dateOfBirth}
        helperText={errors.dateOfBirth}
        margin="normal"
        
      />
      <TextField
        label="Player ID"
        name="playerId"
        value={formData.playerId}
        onChange={handleChange}
        error={!!errors.playerId}
        helperText={errors.playerId}
        margin="normal"
        
      />
      <FormControl margin="normal" >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="medicalCertificate"
                checked={formData.medicalCertificate}
                onChange={handleChange}
              />
            }
            label="Medical Certificate"
            error={!!errors.medicalCertificate}
          />
        </FormGroup>
        {errors.medicalCertificate && (
          <FormLabel error>{errors.medicalCertificate}</FormLabel>
        )}
      </FormControl>
      <FormControl margin="normal">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          name="category"
          value={formData.category}
          onChange={handleChange}
          error={!!errors.category}
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">c</MenuItem>
          <MenuItem value="D">D</MenuItem>
        </Select>
        {errors.category && <FormLabel error>{errors.category}</FormLabel>}
      </FormControl>
      <TextField
        label="Notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        margin="normal"
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;


