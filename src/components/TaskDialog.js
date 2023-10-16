import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useAuth } from '../context/AuthContext';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function TaskDialog() {

  const auth = useAuth();

  const [open, setOpen] = React.useState(false);
  const [taskData, setTaskData] = React.useState({
    title: '',
    description: '',
    urgency: '',
    datetime: '', // Inicializa con la fecha y hora actual
    category: '',
  });
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskDataChange = (name, value) => {
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };
  

const handleCreate = async () => {
  try {
    const firebaseAuthenticationId = auth.user.uid;

    const taskDataToSend = {
      firebaseAuthenticationId: firebaseAuthenticationId,
      task: {
        title: taskData.title,
        description: taskData.description,
        urgency: taskData.urgency,
        datetime: taskData.datetime.toISOString(),
        category: taskData.category,
      }
    };

    const response = await axios.post('http://localhost:8000/tasks_service/create', taskDataToSend);

    if (response.status === 200) {
      console.log('Tarea creada con éxito', response);
      setTaskData('')
      setOpen(false);
      // Realiza cualquier otra acción necesaria después de crear la tarea.
    } else {
      console.error('Error al crear la tarea:', response);
      // Maneja el error de acuerdo a tus necesidades.
    }
  } catch (error) {
    console.error('Error al crear la tarea:', error);
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
            CREAR TAREA
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
            value={taskData.title}
            onChange={(event) => handleTaskDataChange(event.target.name, event.target.value)}
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
            value={taskData.description}
            onChange={(event) => handleTaskDataChange(event.target.name, event.target.value)}
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
            value={taskData.urgency}
            onChange={(event) => handleTaskDataChange(event.target.name, event.target.value)}
          />
          <TextField
            color='secondary' 
            margin="dense"
            id="category"
            name="category"
            label="Category"
            type="text"
            fullWidth
            variant="outlined"
            value={taskData.category}
            onChange={(event) => handleTaskDataChange(event.target.name, event.target.value)}
          />
          <DateTimePicker
            margin="dense"
            id="datetime"
            name="datetime"
            label="Fecha y Hora"
            type="datetime-local"
            fullWidth
            variant="outlined"
            value={taskData.datetime}
            defaultValue={dayjs()}
            onChange={(value) => handleTaskDataChange("datetime", value)}
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
