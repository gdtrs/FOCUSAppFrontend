import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <ContactMailRoundedIcon />, name: 'Citas' },
  { icon: <AssignmentIcon />, name: 'Tareas' },
  { icon: <AllInclusiveIcon />, name: 'Hábitos' },
  { icon: <SelfImprovementIcon />, name: 'Relajación' },
  { icon: <PsychologyAltIcon />, name: 'Información' },

];

export default function SpeedDialComponent() {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (selectedOption) => {
    // Aquí puedes definir las rutas correspondientes para cada opción
    switch (selectedOption) {
      case 'Tareas':
        navigate('/user-tasks');
        break;
      case 'Hábitos':
        navigate('/user-habits');
        break;
      case 'Relajación':
        navigate('/chamber');
        break;
      case 'Información':
        navigate('/information');
        break;
      case 'Citas':
        navigate('/user-appointments');
        break;
      default:
        break;
    }
    
    // Cierra el SpeedDial después de seleccionar una opción
    handleClose();
  };

  return (
    <Box 
        sx={{
            position: 'absolute',
            zIndex: 2,
            left: 0,
            right: 0,
            margin: '0 auto',
        }}>
      <Backdrop open={open} />
      <SpeedDial
        className='animate__animated animate__flip'
        ariaLabel="SpeedDial tooltip example"
        sx={{
            position: 'absolute',
            bottom: 10,
            right: 350,
            left: 350,
            '@media (max-width: 699px)': {
                right: 200,
                left: 200
            },
            '@media (max-width: 399px)': {
                right: 150,
                left: 150
            },
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleSelect(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}