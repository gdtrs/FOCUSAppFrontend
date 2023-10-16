import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";
import {
  Button,
  TextField,
  Paper,
  Typography,
  Snackbar,
  Alert,
  Box,
  Container,
  Avatar,
  CssBaseline,
  Grid,
  Tooltip
} from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import ArrowBackIosRounded from '@mui/icons-material/ArrowBackIosRounded';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';
import { useNavigate } from 'react-router-dom';

import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs';

export default function Appointments() {
  
  const auth = useAuth();
  const navigate = useNavigate();

  const [description, setDescription] = useState('');
  const [datetime, setDatetime] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }

  const handleBack = async () => {
    navigate('/home-screen')
  }

  // Función para manejar el envío del formulario
  const handleFormSubmit = async () => {
    try {
        const firebaseAuthenticationId = auth.user.uid;
      
        const response = await axios.get(
          `http://localhost:8000/users_service/get_by_firebase_id/${firebaseAuthenticationId}`
        );
      
        if (response.status === 200) {
          // Comprueba si el usuario existe en la respuesta de la API
          if (response.data && response.data.nickname) {
            const userNickname = response.data.nickname;

            // userNickname en la solicitud posterior
            const appointmentResponse = await axios.post('http://localhost:8000/appointments_service/create', {
              nickname: userNickname,
              appointment: {
                description,
                datetime: datetime.toISOString()
              },
            });
      
            if (appointmentResponse.status === 200) {
              // Realiza las acciones necesarias después de crear la cita
              setDescription('');
              setDatetime('');
              setOpen(true)
            } else {
              // Maneja errores de la solicitud de creación de cita
            }
          }
        }
      } catch (error) {
        console.error('Error al verificar los datos del usuario:', error);
      }
      
  };

  return (
    <ThemeProvider theme={themeOptionDark}>
          <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundImage: 'url(/backgroundhabits.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
                t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >
            <CssBaseline />
            <Container >
                <Grid container 
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Grid item xs={12} sm={6}>
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
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar className='animate__animated animate__zoomIn' sx={{ m: 1, bgcolor: 'secondary.main', width: 70, height: 70 }}>
                          <AssignmentIcon sx={{ width: 60, height: 60 }} />
                        </Avatar>
                        <Typography className='animate__animated animate__zoomIn' component="h1" variant="h2" sx={{ color: '#fff' }}>
                          CITAS
                        </Typography>
                      </Box>
                      <Paper className='animate__animated animate__zoomIn' elevation={6}
                        sx={{
                          padding: 2,
                          mt: 2,
                          width: '500px',
                          backgroundImage: 'url(/backgrounddarkpurple.png)',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          '@media (max-width: 481px)': {
                            backgroundImage: 'url(/backgroundregister1.png)',
                          },
                        }}
                      >
                        <Typography variant="h5" gutterBottom>
                          Agenda una cita con la psicopedagoga!
                        </Typography>
                        <Box 
                          component="form"
                          noValidate
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleFormSubmit();
                          }}
                        >
                          <TextField
                            label="Descripción"
                            multiline
                            fullWidth
                            margin="normal"
                            color="primary"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{mb: 2}}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <MobileDateTimePicker
                              defaultValue={dayjs()}
                              required
                              value={datetime}
                              onChange={setDatetime}
                            />
                            <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
                              Agendar Cita
                            </Button>
                          </div>
                        </Box>
                      </Paper>
                      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                              Cita agenda con éxito!
                            </Alert>
                      </Snackbar>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </ThemeProvider>
  );
}

