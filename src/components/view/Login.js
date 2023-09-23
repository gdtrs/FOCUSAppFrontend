import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { themeOptionLight, themeOptionDark } from "./Welcome";
import { useNavigate } from "react-router-dom";


function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {'Copyright © '}
      <Link style={{ color: '#fff' }}  href="https://mui.com/">
        Focus App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login2 = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const { displayName } = auth.user
    console.log(displayName)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await auth.login(email, password);
        
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    };

    const handleGoogle = async (e) => {
      e.preventDefault();
      try {
        const result = await auth.loginWithGoogle();
        console.log("Usuario autenticado con Google:", result.user.displayName);
        navigate('/generalinfo')
      } catch (error) {
        if (error.code === "auth/popup-closed-by-user") {
          // El usuario cerró manualmente la ventana emergente de Google
          // Puedes mostrar un mensaje al usuario aquí
          console.warn("Se cerró la ventana emergente de Google sin iniciar sesión.");
        } else {
          console.error("Error al iniciar sesión con Google:", error);
        }
      }
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
            backgroundImage: 'url(/backgroundlogin.png)',
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
            backgroundImage: 'url(/backgroundlogin1.png)',
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicio de Sesión
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                color="secondary"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                color="secondary"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
              <Button
                fullWidth
                variant="text"
                color="secondary"
                sx={{ mt: 1, mb: 2 }}
                onClick={handleGoogle}
              >
                <GoogleIcon color="secondary" style={{ marginRight: "10px" }} />
                Iniciar Sesión con Google
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/register" variant="body2" style={{ color: '#fff' }}>
                    {"¿No tienes una cuenta? Registrate"}
                    <LoginIcon color="secondary" style={{ marginLeft: '10px' }} />
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

export default Login2;
