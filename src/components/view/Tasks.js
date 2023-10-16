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
  ListItemAvatar,
  ListItemIcon,
  Divider,
  Button,
  ListItemSecondaryAction,
  IconButton,
  Tooltip
} from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';
import TaskDialog from '../TaskDialog';
import EditTaskDialog from '../EditTaskDialog';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosRounded from '@mui/icons-material/ArrowBackIosRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

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

export default function Tasks() {
  const navigate = useNavigate()
  const auth = useAuth();
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditSave = (editedTask) => {
    // Aquí puedes enviar la tarea editada al servidor o realizar cualquier otra acción necesaria.
    console.log('Tarea editada:', editedTask);
  };

  const handleBack = async () => {
    navigate('/home-screen')
  }

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

  return (
    <ThemeProvider theme={themeOptionDark}>
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
        <Container component="main" maxWidth="xs">
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 70, height: 70 }}>
              <AssignmentIcon sx={{ width: 60, height: 60 }} />
            </Avatar>
            <Typography component="h1" variant="h2" sx={{ color: '#fff' }}>
              TAREAS 
            </Typography>
            <Paper
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
              <TaskDialog/>
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
                      <ListItemSecondaryAction>
                        <Tooltip title='Editar'>
                          <IconButton  onClick={() => handleEditClick(task)} edge="end" aria-label="Editar">
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Borrar'>
                          <IconButton sx={{ml: 2}} edge="end" aria-label="Eliminar">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
              {selectedTask && (
                <EditTaskDialog
                  open={editDialogOpen}
                  onClose={handleEditDialogClose}
                  task={selectedTask}
                  onSave={handleEditSave}
                />
              )}
            </Paper>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
