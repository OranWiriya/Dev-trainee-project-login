import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

function Registerform() {
  const [loginData, setLoginData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isError, setIsError] = useState({
    username: false,
    password: false,
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    
    setLoginData((prevData) => {
        const newData = {
          ...prevData,
          [name]: value,
        };
    
        // Add password validation logic here
        if (newData.password !== newData.confirmPassword) {
          setIsError((prev) => ({
            ...prev,
            password: true,
          }));
        } else {
          setIsError((prev) => ({
            ...prev,
            password: false,
          }));
        }
    
        return newData;
      });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(loginData);
    const body = {
      firstname: loginData.firstname,
      lastname: loginData.lastname,
      username: loginData.username,
      password: loginData.password,
    };
    setLoginData({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmPassword: '',
    });

    try {
      const response = await fetch('/api/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (!response.ok) {
        setIsError({
          username: true,
          password: true,
        });
        throw new Error('Register failed');
      }
      // Handle the response data
      setIsError({
        username: false,
        password: false,
      });
      console.log(data);
    } catch (error) {
      // Handle any errors
      console.error((error as Error).message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        mx: 'auto',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Box
          sx={{
            padding: '18px',
            backgroundColor: 'whitesmoke',
            borderRadius: '5px',
          }}
        >
          <Grid item xs={12} textAlign="center">
            <Typography variant="h5" marginBottom="10px">
              Dev-Trainee-Project-Login
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit} className="w-full">
            <Grid item xs={12}>
              <InputLabel>firstname:</InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Firstname"
                name="firstname" // Add name attribute for identifying the field
                value={loginData.firstname} // Set value from state
                onChange={handleChange} // Handle changes
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>lastname:</InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Lastname"
                name="lastname" // Add name attribute for identifying the field
                value={loginData.lastname} // Set value from state
                onChange={handleChange} // Handle changes
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Username:</InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Username"
                name="username" // Add name attribute for identifying the field
                value={loginData.username} // Set value from state
                onChange={handleChange} // Handle changes
                error={!!isError.username}
              />
            </Grid>
            {isError.username === true ? (
              <Typography textAlign="center" color="red">
                Username is already used.
              </Typography>
            ) : null}
            <Grid item xs={12}>
              <InputLabel>Password:</InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                placeholder="Password"
                name="password" // Add name attribute for identifying the field
                value={loginData.password} // Set value from state
                onChange={handleChange} // Handle changes
                error={!!isError.password}
              />
            </Grid>
            {isError.password === true ? (
              <Typography textAlign="center" color="red">
                Password and ConfirmPassword must match.
              </Typography>
            ) : null}
            <Grid item xs={12}>
              <InputLabel>Confirm Password:</InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                placeholder="Confirm password"
                name="confirmPassword" // Add name attribute for identifying the field
                value={loginData.confirmPassword} // Set value from state
                onChange={handleChange} // Handle changes
                error={!!isError.password}
              />
            </Grid>
            {isError.password === true ? (
              <Typography textAlign="center" color="red">
                Password and ConfirmPassword must match.
              </Typography>
            ) : null}
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginTop: '15px',
                  width: '100%',
                }}
                disabled={isError.password || isError.username}
              >
                SUBMIT
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Box>
  );
}

export default Registerform;
