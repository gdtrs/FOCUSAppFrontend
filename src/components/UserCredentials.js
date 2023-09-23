import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function InfoUserForm({ onUserChange }) {

  const handleUserChange = (event) => {
    const { id, value } = event.target;
    onUserChange(id, value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información de Usuario
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nickname"
            name="nickname"
            label="Usuario"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleUserChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Nombre"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleUserChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="firstlastname"
            name="firstlastname"
            label="Primer Apellido"
            fullWidth
            autoComplete=""
            variant="standard"
            onChange={handleUserChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="secondlastname"
            name="secondlastname"
            label="Segundo Apellido"
            fullWidth
            autoComplete=""
            variant="standard"
            onChange={handleUserChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}