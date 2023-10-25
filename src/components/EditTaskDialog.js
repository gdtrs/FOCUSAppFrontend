import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';


const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);

  const day = date.getDate(); // Sin +1 para obtener el día correcto
  const month = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "noviembre", "diciembre"
  ][date.getMonth()];
  const year = date.getFullYear();
  const hours = (date.getHours() % 12).toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formatted = `${day} de ${month} de ${year} a las ${hours}:${minutes}`;

  return formatted;
};

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

const EditTaskDialog = ({ open, onClose, task, onSave }) => {
  const [editedTask, setEditedTask] = useState({
    ...task, // Copia todas las propiedades del objeto task
    datetime: dayjs(task.datetime), // Inicializa como objeto dayjs
  });

  // Actualiza el formulario cuando cambia la tarea seleccionada
  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const handleTaskDataChange = (name, value) => {
    setEditedTask({ ...editedTask, [name]: value });
  };

  const updateTaskInDatabase = async () => {
    try {

      const response = await axios.post('http://localhost:8000/tasks_service/update', {
        taskId: editedTask.taskId,
        task: {
          title: editedTask.title,
          description: editedTask.description,
          urgency: editedTask.urgency,
          datetime: editedTask.datetime.toISOString(),
          category: editedTask.category,
        }
      });
      
      if (response.status === 200) {
        console.log('Tarea actualizada con éxito');
        // Realiza cualquier otra acción necesaria después de actualizar la tarea.
      } else {
        console.error('Error al actualizar la tarea:', response);
        // Maneja el error de acuerdo a tus necesidades.
      }
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      // Maneja el error de acuerdo a tus necesidades.
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle 
        sx={{
            backgroundImage: 'url(/backgrounddarkpurple.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
      >
        Editar Tarea
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
          label="Título"
          variant="outlined"
          fullWidth
          value={editedTask.title}
          onChange={(e) => handleTaskDataChange('title', e.target.value)}
          sx={{mb: 2, mt: 2}}
        />
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          value={editedTask.description}
          onChange={(e) => handleTaskDataChange('description', e.target.value)}
          sx={{mb: 2}}
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
          value={editedTask.category}
          onChange={(e) => handleTaskDataChange('category', e.target.value)}
          >
            {predefinedCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        <Slider
          label="Urgencia"
          value={editedTask.urgency}
          onChange={(e, value) => handleTaskDataChange('urgency', value)}
          valueLabelDisplay="auto"
          step={1}
          marks={[
            { value: 1, label: 'Bajo' },
            { value: 2, label: 'Medio' },
            { value: 3, label: 'Alto' },
          ]}
          min={1}
          max={3}
          sx={{ mb: 2 }}
        />
        <DateTimePicker
          margin="dense"
          id="datetime"
          name="datetime"
          label="Fecha y Hora"
          type="datetime-local"
          fullWidth
          variant="outlined"
          value={editedTask.datetime}
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
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={updateTaskInDatabase} color="primary">
          Guardar
        </Button>
      </DialogActions>  
    </Dialog>
  );
};

export default EditTaskDialog;

