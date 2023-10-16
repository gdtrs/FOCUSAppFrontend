import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';


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


const EditTaskDialog = ({ open, onClose, task, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

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
          category: editedTask.category,
          datetime: formatDate(editedTask.datetime)
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
          label="Urgencia"
          variant="outlined"
          fullWidth
          value={editedTask.urgency}
          onChange={(e) => handleTaskDataChange('urgency', e.target.value)}
          sx={{mb: 2}}
        />
        <TextField
          label="Categoria"
          variant="outlined"
          fullWidth
          value={editedTask.category}
          onChange={(e) => handleTaskDataChange('category', e.target.value)}
          sx={{mb: 2}}
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

