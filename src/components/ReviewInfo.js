import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function RevisarInfo({ userData, studentData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información Personal
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Usuario" secondary={userData.nickname} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Nombre" secondary={userData.name} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Primer Apellido" secondary={userData.firstlastname} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Segundo Apellido" secondary={userData.secondlastname} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Grado" secondary={studentData.grade} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Grupo" secondary={studentData.class} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Carnét Estudiantil" secondary={studentData.studentidentifier} />
        </ListItem>
      </List>
    </React.Fragment>
  );
}