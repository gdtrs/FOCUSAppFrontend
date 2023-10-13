import Atropos from 'atropos/react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



export default function DailyAdvice() {
    return (
        <Atropos className='atropos'>
          <Paper elevation={3}
           sx={{
            backgroundImage: `url('/backgroundregister.png')`,
            backgroundSize: 'cover',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
           }}>
            <Typography variant="h4" component="div" gutterBottom>
              Título de la imagen
            </Typography>
            <Typography variant="body1">
              Este es el texto descriptivo de la imagen. Puedes personalizar este contenido según tus necesidades.
            </Typography>
          </Paper>
        </Atropos>
      );
  }
  
