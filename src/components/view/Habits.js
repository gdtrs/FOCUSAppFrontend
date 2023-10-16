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
  Divider
} from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';

// Supongamos que tienes un array de tareas (aquí se usa un estado local para simplificar)
const mockTasks = [
  { id: 1, title: 'Darle de comer a los perros', description: 'Descripción 1' },
  { id: 2, title: 'Ir a sacar la basura el martes', description: 'Descripción 2' },
  // Agrega más tareas aquí
];

export default function Habits() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    // Simulación de carga de tareas desde la base de datos
    setHabits(mockTasks);
  }, []);

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
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 70, height: 70 }}>
              <AssignmentIcon sx={{ width: 60, height: 60 }} />
            </Avatar>
            <Typography component="h1" variant="h2" sx={{ color: '#fff' }}>
              HÁBITOS
            </Typography>

            {/* Aquí comienza la lista de tareas */}
            <Paper sx={{ padding: 2, mt: 5 }}>
              <Typography variant="h5" gutterBottom>
                Agrega un hábito!
              </Typography>

              <List>
                {habits.map((habits, index) => (
                  <React.Fragment key={habits.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AssignmentIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={habits.title} secondary={habits.description} />
                    </ListItem>
                    {index < habits.length - 1 && <Divider variant="inset" />} {/* Agrega un Divider entre ListItem, excepto el último */}
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
