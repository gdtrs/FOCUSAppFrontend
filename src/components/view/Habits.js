import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
  CssBaseline
} from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';
import HabitDialog from '../HabitDialog';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosRounded from '@mui/icons-material/ArrowBackIosRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString)

  const day = date.getDate() + 1
  const month = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "noviembre", "diciembre"
  ][date.getMonth()]
  const year = date.getFullYear()
  const hours = (date.getHours() % 12).toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")

  const formatted = `${day} de ${month} de ${year} a las ${hours}:${minutes}`

  return formatted
}


export default function Habits() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    // Llama a la API para obtener citas pendientes cuando el componente se monta
    const fetchHabits = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/habits_service/get_user_habits',
          { firebaseAuthenticationId: auth.user.uid }
        );

        if (response.status === 200) {
          setHabits(response.data);
        } else {
          // Manejar errores si es necesario
        }
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchHabits();
  }, [auth.user.uid]);

  const handleBack = async () => {
    navigate('/home-screen')
  }

  return (
    <ThemeProvider theme={themeOptionDark}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: 'url(/backgroundhabits.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container component="main" maxWidth="xs">
        <CssBaseline/>
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
              <AssignmentIcon sx={{ width: 60, height: 60 }} />
            </Avatar>
            <Typography className='animate__animated animate__zoomIn' component="h1" variant="h2" sx={{ color: '#fff' }}>
              HÁBITOS
            </Typography>

            {/* Aquí comienza la lista de tareas */}
            <Paper
              className='animate__animated animate__zoomIn'
              elevation={6}
              sx={{
                width: '750px',
                padding: 2,
                mt: 5,
                backgroundImage: 'url(/backgrounddarkpurple.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <HabitDialog/>
              <List>
                {habits.map((habit) => (
                  <React.Fragment key={habit.habitId}>
                    <ListItem divider>
                      <ListItemIcon>
                        <AllInclusiveIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Titulo"
                        secondary={habit.title}
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                      <ListItemText
                        primary="Descripción"
                        secondary={habit.description}
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                      <ListItemText
                        primary="Fecha y Hora"
                        secondary={formatDate(habit.time)}
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                      <ListItemSecondaryAction>
                        <Tooltip title='Editar'>
                          <IconButton  /*</Tooltip>onClick={() => handleEditClick(habit)}*/ edge="end" aria-label="Editar">
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Borrar'>
                          <IconButton /*onClick={() => handleDeleteTask(habit.taskId)} */ sx={{ml: 2}} edge="end" aria-label="Eliminar">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
