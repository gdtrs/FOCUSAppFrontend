import Atropos from 'atropos/react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { useNavigate } from 'react-router-dom';

export default function ChamberOfReflection() {

  const navigate = useNavigate();

  const handleNavigate  = () => {
    navigate('/chamber')
  }

    return (
        <Atropos className='animate__animated animate__bounceIn animate__delay-0.5s' style={{width: '100%'}}>
          <Paper
           sx={{
            backgroundImage: `url('/chamberback.svg')`,
            backgroundSize: 'cover',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            height: 230,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
           }}>
            <Typography variant="h4" component="div" gutterBottom data-atropos-offset="5">
              CÁMARA DE RELAJACIÓN
            </Typography>
            <Button variant='contained' color='secondary' data-atropos-offset="10" onClick={handleNavigate}>
              ENTRAR 
              <SelfImprovementIcon sx={{mb: '1px', ml: 1}}/>
            </Button>
          </Paper>
        </Atropos>
  );
}