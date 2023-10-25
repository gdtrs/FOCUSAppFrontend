import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useAuth } from '../context/AuthContext';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const predefinedCategories = [
    "Salud",
    "Estudio",
    "Hogar",
    "Compras",
    "Deporte",
    "Proyectos",
    "Tecnologia",
    "Actividades",
    "Entretenimieto",
    "Eventos especiales",
];
  

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
  
  const [urgency, setUrgency] = React.useState(2); // Inicializar en "Medio"

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskDataChange = (name, value) => {
    if (name === "urgency") {
      setUrgency(value); // Actualiza la urgencia directamente
    } else {
      // Para otros campos, sigue actualizando el objeto `taskData` como lo hacías antes.
      setTaskData((prevTaskData) => ({
        ...prevTaskData,
        [name]: value,
      }));
    }
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
            color="secondary"
            margin="dense"
            id="category"
            name="category"
            label="Category"
            select // Agregar esta prop para convertirlo en un select
            fullWidth
            variant="outlined"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {predefinedCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <Slider
            name="urgency"
            value={urgency}
            onChange={(event, value) => setUrgency(value)}
            step={1}
            marks={[
              { value: 1, label: 'Bajo' },
              { value: 2, label: 'Medio' },
              { value: 3, label: 'Alto' },
            ]}
            min={1}
            max={3}
            valueLabelDisplay="auto"
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
