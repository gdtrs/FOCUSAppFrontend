import Atropos from 'atropos/react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function DailyAdvice() {
  return (
    <Atropos className='animate__animated animate__bounceIn animate__delay-0.5s' style={{width: '100%', borderRadius: '10px'}}>
      <Paper
       sx={{
        backgroundImage: `url('/adviceback.svg')`,
        backgroundSize: 'cover',
        padding: '30px',
        borderRadius: '10px',
        textAlign: 'center',
        height: 230,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '@media (max-width: 960px)': {
          backgroundImage: `url('/adviceback1.svg')`,
        },
       }}>
        <Typography variant="h3" component="div" gutterBottom data-atropos-offset="5">
          CONSEJO DIARIO 
        </Typography>
        <Typography variant="body1" data-atropos-offset="5">
          ¿No te puedes concentrar? La cámara de la relajación te espera!
        </Typography>
      </Paper>
    </Atropos>
);
}
  
