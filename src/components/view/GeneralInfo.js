import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import InfoUserForm from '../UserCredentials';
import InfoStudentForm from '../StudentCredentials';
import RevisarInfo from '../ReviewInfo';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link style={{ color: '#fff' }} href="https://mui.com/">
        FocusApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function GeneralInfo() {

    const auth = useAuth();
    const {displayName} = auth.user;
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);
    const [userData, setUserData] = useState({
      nickname: '',
      name: '',
      firstlastname: '',
      secondlastname: '',
    });
    const [studentData, setStudentData] = useState({
      grade: '',
      class: '',
      studentidentifier: '',
    });

    const [userDataExists, setUserDataExists] = useState(false);

    useEffect(() => {
      const checkUserDataExists = async (e) => {
        try {
          // Obtén el firebaseAuthenticationId del usuario actual (supongo que está en auth.user.uid)
          const firebaseAuthenticationId = auth.user.uid;
    
          const response = await axios.get(
            `http://localhost:8000/users_service/get_by_firebase_id/${firebaseAuthenticationId}`
          );
    
          if (response.status === 200) {
            // Comprueba si el usuario existe en la respuesta de la API
            if (response.data && response.data.nickname) {
              setUserDataExists(true);
            }
          }
        } catch (error) {
          console.error('Error al verificar los datos del usuario:', error);
        }
      };
    
      checkUserDataExists();
    }, [auth.user.uid]);
    
    // Funciones para actualizar los datos del usuario
    const handleUserChange = (field, value) => {
        setUserData({ ...userData, [field]: value });
    };
    
    // Funciones para actualizar los datos del estudiante
    const handleStudentChange = (field, value) => {
        setStudentData({ ...studentData, [field]: value });
    };

    const handleLogout = (e) => {
        auth.logout();
        navigate('/login');
    }
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

    const steps = ['Info. Usuario', 'Info. Estudiante', 'Confirmar Info.'];

    const handleSave = async (e) => {
        e.preventDefault();
        try {
          // Preparar los datos para enviar al servidor
          const dataToSave = {
            firebaseAuthenticationId: auth.user.uid,
            user: {
                nickname: userData.nickname,
                name: userData.name,
                firstSurname: userData.firstlastname,
                secondSurname: userData.secondlastname,
                grade: studentData.grade,
                class: studentData.class,
                studentIdentifier: studentData.studentidentifier,
            }
          };
      
          // Realizar la solicitud POST al servidor para guardar los datos
          const response = await axios.post('http://localhost:8000/users_service/create', dataToSave);
      
          if (response.status === 200) {
            // Los datos se guardaron exitosamente
            console.log('Datos enviados con exito') // Mostrar un log en la consola
            navigate('/home-screen')
          } else  {
            // Hubo un error al guardar los datos
            console.error('Error al guardar los datos en el servidor');
          }
        } catch (error) {
          console.error('Error al procesar la solicitud POST:', error);
        }
      };

    function getStepContent(step) {
    switch (step) {
        case 0:
        return <InfoUserForm onUserChange={handleUserChange} />;
        case 1:
        return <InfoStudentForm onStudentChange={handleStudentChange} />;
        case 2:
        return <RevisarInfo userData={userData} studentData={studentData} />;
        default:
        throw new Error('Unknown step');
    }
    }

  return (
    <React.Fragment>
      {userDataExists ? (
        // Redirigir al usuario si los datos ya existen
        navigate('/home-screen')
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundImage: 'url(/backgroundhomescreen.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <ThemeProvider theme={themeOptionDark}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
                backgroundImage: 'url(/backgrounddarkpurple.png)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}
            >
            <Toolbar>
                <Typography variant="h6" fontWeight='bold' color="inherit" noWrap>
                FOCUS APP
                </Typography>
                <Box sx={{ flexGrow: 1 }} /> {/* Espacio en blanco para empujar los elementos al lado derecho */}
                <Typography variant="body1" color="inherit" noWrap>
                {displayName}
                </Typography>
                <Tooltip title="Cerrar Sesión">
                  <IconButton color="secondary" onClick={handleLogout} sx={{ ml: 1 }}>
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
            </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm">
                <Paper 
                  className="animate__animated animate__fadeInUp" 
                  elevation={6} 
                  sx={{ 
                    mb: 4,
                    my: { xs: 3, md: 6 },
                    p: { xs: 2, md: 3 },
                    backgroundImage: 'url(/backgrounddarkpurple.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }}>
                <Typography component="h1" variant="h4" align="center">
                    Información
                </Typography>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Volver
                        </Button>
                        )}

                        <Button
                        variant="contained"
                        onClick={activeStep === steps.length - 1 ? handleSave : handleNext}
                        sx={{ mt: 3, ml: 1 }}
                        >
                        {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
                        </Button>
                    </Box>
                </React.Fragment>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
      </Box>
      )}
    </React.Fragment>
  );
} 