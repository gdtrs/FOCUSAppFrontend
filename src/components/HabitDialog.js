import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useAuth } from '../context/AuthContext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HabitDialog() {

  const auth = useAuth();

  const [open, setOpen] = React.useState(false);
  const [habitData, setHabitData] = React.useState({
    title: '',
    description: '',
    urgency: '',
    time: dayjs(),
    weekday: '',
    category: '',
    lastCompletedDate: null
     // Inicializa con la fecha y hora actual
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleHabitDataChange = (name, value) => {
    setHabitData((prevHabitData) => ({
      ...prevHabitData,
      [name]: value,
    }));
  };
  

  const handleCreate = async () => {
    try {
      const firebaseAuthenticationId = auth.user.uid;

      const habitDataToSend = {
        firebaseAuthenticationId: firebaseAuthenticationId,
        habit: {
          title: habitData.title,
          description: habitData.description,
          urgency: habitData.urgency,
          time: habitData.datetime.toISOString(),
          weekday: habitData.weekday,
          category: habitData.category,
          lastCompletedDate: null
        }
      };

      const response = await axios.post('http://localhost:8000/habits_service/create', habitDataToSend);

      if (response.status === 200) {
        console.log('Hábito creado con éxito', response);
        setHabitData({
            title: '',
            description: '',
            time: dayjs(), // Vuelve a la fecha y hora actual
            urgency: '',
            category: '',
            weekday: '',
          });
          
        setOpen(false);
        // Realiza cualquier otra acción necesaria después de crear el hábito.
      } else {
        console.error('Error al crear el hábito:', response);
        // Maneja el error de acuerdo a tus necesidades.
      }
    } catch (error) {
      console.error('Error al crear el hábito:', error);
      // Maneja el error de acuerdo a tus necesidades.
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Agregar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle 
          sx={{
            backgroundImage: 'url(/backgrounddarkpurple.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          CREAR HÁBITO
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundImage: 'url(/backgrounddarkpurple.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <TextField
            color='secondary' 
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Título"
            type="text"
            fullWidth
            variant="outlined"
            value={habitData.title}
            onChange={(event) => handleHabitDataChange(event.target.name, event.target.value)}
            sx={{mt: 2}}
          />
          <TextField
            color='secondary' 
            margin="dense"
            id="description"
            name="description"
            label="Descripción"
            type="text"
            fullWidth
            variant="outlined"
            value={habitData.description}
            onChange={(event) => handleHabitDataChange(event.target.name, event.target.value)}
          />
          <TextField
            color='secondary' 
            margin="dense"
            id="urgency"
            name="urgency"
            label="Urgencia"
            type="text"
            fullWidth
            variant="outlined"
            value={habitData.urgency}
            onChange={(event) => handleHabitDataChange(event.target.name, event.target.value)}
          />
         <TextField
            color='secondary' 
            margin="dense"
            id="category"
            name="category"
            label="Categoria"
            type="text"
            fullWidth
            variant="outlined"
            value={habitData.category}
            onChange={(event) => handleHabitDataChange(event.target.name, event.target.value)}
          />
          <TextField
            color='secondary' 
            margin="dense"
            id="weekday"
            name="weekday"
            label="Semanas"
            type="number"
            fullWidth
            variant="outlined"
            value={habitData.weekday}
            onChange={(event) => handleHabitDataChange(event.target.name, event.target.value)}
          />
          <DateTimePicker
            margin="dense"
            id="datetime"
            name="datetime"
            label="Fecha y Hora"
            type="datetime-local"
            fullWidth
            variant="outlined"
            value={habitData.time}
            defaultValue={dayjs()}
            onChange={(value) => handleHabitDataChange("datetime", value)}
            sx={{mt: 2, mb: 1}}
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
          <Button color='secondary' variant='outlined' onClick={handleClose}>Cancelar</Button>
          <Button color='secondary'  variant='contained' onClick={handleCreate}>Crear</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
