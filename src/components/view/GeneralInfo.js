import React, { useState } from 'react';
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
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import InfoUserForm from '../UserCredentials';
import InfoStudentForm from '../StudentCredentials';
import RevisarInfo from '../ReviewInfo';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FocusApp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function GeneralInfo() {

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

    // Funciones para actualizar los datos del usuario
    const handleUserChange = (field, value) => {
        setUserData({ ...userData, [field]: value });
    };
    
    // Funciones para actualizar los datos del estudiante
    const handleStudentChange = (field, value) => {
        setStudentData({ ...studentData, [field]: value });
    };
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

    const steps = ['Info. Usuario', 'Info. Estudiante', 'Confirmar Info.'];


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
        <ThemeProvider theme={themeOptionDark}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                <Typography variant="h6" color="secondary" noWrap>
                    FOCUS APP
                </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
                {activeStep === steps.length ? (
                    <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                        Your order number is #2001539. We have emailed your order
                        confirmation, and will send you an update when your order has
                        shipped.
                    </Typography>
                    </React.Fragment>
                ) : (
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
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                        >
                        {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
                        </Button>
                    </Box>
                    </React.Fragment>
                )}
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    </React.Fragment>
  );
}