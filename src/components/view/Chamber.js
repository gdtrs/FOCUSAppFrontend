import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ArrowBackIosRounded from '@mui/icons-material/ArrowBackIosRounded';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LinearProgress from '@mui/material/LinearProgress';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';


import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';

import SpotifyWebPlayer from '../SpotifyPlayer';
import TextField from '@mui/material/TextField';

export default function Chamber() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [showTitle, setShowTitle] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true); // Controla la visibilidad del botón
  const [showEndButton, setShowEndButton] = useState(false); // Controla la visibilidad del botón "Finalizar Sesión"

  const handleBack = async () => {
    navigate('/home-screen');
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleStartSession = () => {
    setCountdown(time * 60);
    setShowStartButton(false);
    setShowEndButton(true);
    setShowProgressBar(true);
    setShowTitle(false);
    setOpen(false);
  };

  const handleEndSession = () => {
    setCountdown(0);
    setProgress(0);
    setBuffer(0);
    setShowEndButton(false);
    setShowStartButton(true);
    setShowProgressBar(false);
    setShowTitle(true);
  };

  // Actualiza el contador cada segundo
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          }
          return 0;
        });
      }, 1000);
  
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
    }
  
    // Al desmontar el componente, asegúrate de limpiar el intervalo
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [countdown]);
  
  useEffect(() => {
    const total = time * 60;
    const progressPercentage = ((total - countdown) / total) * 100;
    setProgress(progressPercentage);
    setBuffer(progressPercentage);

    if (countdown === 0) {
      setShowProgressBar(false);
      setShowEndButton(false)
      setShowStartButton(true)
      setShowTitle(true)
    }
  }, [countdown, time]);

  return (
    <ThemeProvider theme={themeOptionDark}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: 'url(/backgroundchamber.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Tooltip title='Volver'>
              <ArrowBackIosRounded
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  color: 'white',
                  cursor: 'pointer',
                }}
                fontSize="large"
                onClick={handleBack}
             />
            </Tooltip>
            <Avatar className='animate__animated animate__zoomIn' sx={{ m: 1, bgcolor: 'secondary.main', width: 70, height: 70 }}>
              <SelfImprovementIcon sx={{ width: 60, height: 60 }} />
            </Avatar>
            {showTitle && (
              <Typography className='animate__animated animate__zoomIn' component="h1" variant="h3" sx={{ color: '#fff' }}>
                CÁMARA DE LA RELAJACIÓN
              </Typography>
            )}

            {showStartButton && (
              <Button
                className='animate__animated animate__zoomIn'
                startIcon={<HourglassEmptyRoundedIcon />}
                variant='contained'
                color='secondary'
                sx={{ mb: 2, mt: 2 }}
                onClick={handleOpenDialog}
              >
                Empezar Sesión
              </Button>
            )}

            {/* Diálogo para ingresar el tiempo */}
            <Dialog open={open} onClose={handleCloseDialog}>
              <DialogTitle variant='h2'
                sx={{
                  backgroundImage: 'url(/backgrounddarkpurple.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  textAlign: 'center'
                }}
              >
                HORA DE RELAJARSE
              </DialogTitle>
              <DialogContent
                sx={{
                  backgroundImage: 'url(/backgrounddarkpurple.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <DialogContentText sx={{mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  !Escoge el tiempo que quieras relajarte en minutos!
                </DialogContentText>
                <TextField
                  type="number"
                  value={time}
                  onChange={(e) => setTime(parseInt(e.target.value, 10))}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                />
              </DialogContent>
              <DialogActions
                sx={{
                  backgroundImage: 'url(/backgrounddarkpurple.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Button onClick={handleCloseDialog} color="secondary">
                  Cancelar
                </Button>
                <Button onClick={handleStartSession} color="secondary">
                  Aceptar
                </Button>
              </DialogActions>
            </Dialog>

            {/* Muestra el contador en tiempo real */}
            {countdown > 0 && (
              <Box>
                <Typography variant='h3'>¡Su sesión está en curso!</Typography>
                <Typography variant='h6'sx={{mt: 3}}>Tiempo restante: {Math.floor(countdown / 60)} minutos {countdown % 60} segundos</Typography>
              </Box>
            )}

            {showProgressBar && (
              <Box sx={{ width: '100%', mt: 2, mb: 2 }}>
                <LinearProgress variant="buffer" color='secondary' value={progress} valueBuffer={buffer} />
              </Box>
            )}

            {showEndButton && (
              <Button
                variant='contained'
                color='secondary'
                sx={{ mb: 2, mt: 2 }}
                onClick={handleEndSession}
              >
                Finalizar Sesión
              </Button>
            )}

            <SpotifyWebPlayer/>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}



