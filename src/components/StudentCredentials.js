import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function InfoStudentForm({ onStudentChange }) {

  const handleStudentChange = (event) => {
    const { id, value } = event.target;
    onStudentChange(id, value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información de Estudiante
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="grade"
            label="Grado"
            fullWidth
            variant="standard"
            color='secondary'
            onChange={handleStudentChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="class"
            label="Grupo"
            fullWidth
            variant="standard"
            color='secondary'
            onChange={handleStudentChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="studentidentifier"
            label="Carnét Estudiantil"
            helperText="Ej: 2019086"
            fullWidth
            variant="standard"
            color='secondary'
            onChange={handleStudentChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}