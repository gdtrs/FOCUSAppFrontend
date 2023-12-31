import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";


export const themeOptionLight = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#8c52ff',
      },
      secondary: {
        main: '#ff66ca',
        contrastText: '#ffffff',
      },
    },
  });
  
  export const themeOptionDark = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#8c52ff',
      },
      secondary: {
        main: '#ff66ca',
        contrastText: '#ffffff',
      },
      background: {
        default: '#18072b',
      },
    }
  });


const Welcome = () => {
  return (
    <ThemeProvider theme={themeOptionDark}>
      <Grid
        className="animate__animated animate__fadeIn"
        container
        component="main"
        sx={{
          height: '100vh',
          backgroundImage: 'url(/backgroundwelcome.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (max-width: 481px)': {
            backgroundImage: 'url(/backgroundwelcomephone.png)', // Cambia la imagen de fondo para pantallas de 414px o menos
          },
        }}
        
      >
        <CssBaseline />
        <Box
          sx={{ 
            width: 600,
            backgroundColor: 'rgb(24 7 43)', // Fondo blanco semitransparente
            borderRadius: '10px', // Bordes redondeados
            marginTop: '200px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
        >
          <Typography className='animate__heartBeat' variant="h3" gutterBottom>
            ¡Bienvenido a Nuestra Aplicación!
          </Typography>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button variant="contained" fullWidth color="secondary" sx={{ mt: 5, mb: 5 }}>
              Registrarse
            </Button>
          </Link>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
            ¿Ya tienes una cuenta? Iniciar Sesión
          </Link>
          <LoginIcon color="secondary" style={{ marginLeft: '10px' }} />
        </Box>
      </Grid>
    </ThemeProvider>
  );
};        



export default Welcome;