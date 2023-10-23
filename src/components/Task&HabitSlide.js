import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative } from 'swiper/modules';

// Importa los componentes de Material-UI
import Card from '@mui/material/Card';
import EventNoteIcon from '@mui/icons-material/EventNote'
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem  from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import Habits from './view/Habits';

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

const Slider = () => {

  const auth = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [habits, setHabits] = useState([]);


  useEffect(() => {
    // Llama a la API para obtener citas pendientes cuando el componente se monta
    const fetchAppointments = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/appointments_service/get_pending_appointments',
          { firebaseAuthenticationId: auth.user.uid }
        );

        if (response.status === 200) {
          setAppointments(response.data);
        } else {
          // Manejar errores si es necesario
        }
      } catch (error) {
        console.error('Error al obtener citas pendientes:', error);
      }
    };

    fetchAppointments();
  }, [auth.user.uid]);

  useEffect(() => {
    // Llama a la API para obtener citas pendientes cuando el componente se monta
    const fetchTasks = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/tasks_service/get_user_tasks',
          { firebaseAuthenticationId: auth.user.uid }
        );

        if (response.status === 200) {
          setTasks(response.data);
        } else {
          // Manejar errores si es necesario
        }
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchTasks();
  }, [auth.user.uid]);

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

  return (
    <Swiper
    grabCursor={true}
    effect={'creative'}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }}
    modules={[EffectCreative]}
  >
    <SwiperSlide>
      <Card
        className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
        sx={{
          borderRadius: 5,
          mb: 8,
          mr: 3,
          ml: 3,
          height: 500,
          background: 'linear-gradient(360deg, #772fa8, #c471ed)',
          '@media (max-width: 481px)': {
            height: 425,
            mb: 8,
          },
          '@media (max-width: 899px)': {
            height: 400,
            mb: 8,
          },
        }}
      >
        <CardContent>
          <Typography variant="h2" component="div">
            AGENDA DE CITAS
          </Typography>
          <List>
            {appointments.map((appointment) => (
              <React.Fragment key={appointment.appointmentId} sx={{}}>
                <ListItem divider>
                  <ListItemIcon>
                    <EventNoteIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Descripción"
                    secondary={appointment.description}
                    primaryTypographyProps={{ variant: 'subtitle1' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                  <ListItemText
                    primary="Fecha y Hora"
                    secondary={formatDate(appointment.datetime)}
                    primaryTypographyProps={{ variant: 'subtitle1' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
        <Card
            sx={{
                borderRadius: 5,
                mb: 8,
                mr: 3,
                ml: 3,
                height: 500,
                background:  'linear-gradient(360deg, #FF66CA, #EF88E5)',
                '@media (max-width: 481px)': {
                  height: 425,
                  mb: 8,
                },
                '@media (max-width: 899px)': {
                  height: 400,
                  mb: 8,
                },
            }}>
          <CardContent>
            <Typography variant="h2" component="div">
              HÁBITOS
            </Typography>
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
                        secondary={formatDate(habit.datetime)}
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
          </CardContent>
        </Card>
    </SwiperSlide>
    <SwiperSlide>
        <Card
            sx={{
                borderRadius: 5,
                mr: 3,
                ml: 3,
                height: 500,
                background: 'linear-gradient(360deg, #320F59, #9352E6)',
                '@media (max-width: 481px)': {
                  height: 425,
                  mb: 8,
                },
                '@media (max-width: 899px)': {
                  height: 400,
                  mb: 8,
                },
            }}
        >
          <CardContent>
            <Typography variant="h2" component="div">
              TAREAS PENDIENTES
            </Typography>
            <List>
                {tasks.map((task) => (
                  <React.Fragment key={task.taskId}>
                    <ListItem divider>
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Titulo"
                        secondary={task.title}
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                      <ListItemText
                        primary="Descripción"
                        secondary={task.description}
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                      <ListItemText
                        primary="Fecha y Hora"
                        secondary={formatDate(task.datetime)}
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                        secondaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
          </CardContent>
        </Card>
    </SwiperSlide>
  </Swiper>
  );
};

export default Slider;
