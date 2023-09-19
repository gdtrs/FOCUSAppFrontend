import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { themeOptionLight, themeOptionDark } from "./Welcome";

function Copyright(props) {
    return (
      <Typography variant="body2" align="center" {...props}>
        {'Copyright © '}
        <Link style={{ color: '#fff' }} href="https://mui.com/">
          Focus App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const Register = () => {

    const auth = useAuth();
    const [ emailRegister, setEmailRegister ] = useState("");
    const [ passwordRegister, setPasswordRegister ] = useState("");

    const handleRegister = (e) => {

        e.preventDefault()
        auth.register( emailRegister, passwordRegister )

    };
  
    return (
      <ThemeProvider theme={themeOptionDark}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(/backgroundregister.png)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        <Grid 
            item xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            sx={{ 
                backgroundImage: 'url(/backgroundregister1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Registrarse
              </Typography>
              <Box component="form" noValidate onSubmit={handleRegister} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmailRegister(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPasswordRegister(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrarse
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/login" variant="body2" style={{ color: '#fff' }}>
                      {"¿Ya tienes una cuenta? Inicia Sesion"}
                      <LoginIcon color="primary" style={{ marginLeft: '10px' }} />
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }

export default Register;