import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

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
        // Envía solo las propiedades que deseas actualizar en editedTask
        title: editedTask.title,
        description: editedTask.description,
        urgency: editedTask.urgency,
        category: editedTask.category,
        // Asegúrate de que la propiedad datetime esté en el formato correcto para tu API
        datetime: editedTask.datetime, // Reemplaza 'formattedDate' con el valor correcto
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

