import React, {useState} from 'react'
//PALETA DE COLORES DEL COMPONENTE
import { themeOptionDark } from './Welcome';
//HERRAMIENTA DE AUTENTICACION DE USUARIOS
import { useAuth } from "../../context/AuthContext";
//HERRAMIENTA DE NAVEGACION
import { useNavigate } from "react-router-dom";
//MATERIAL UI COMPONENTS
import { 
  ThemeProvider,
  styled 
} from '@mui/material/styles';
import {
  Fab,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  AppBar,
  Box,
  Typography,
  Container,
  Toolbar,
  IconButton,
  CssBaseline,
  Grid
} from '@mui/material';
//MATERIAL UI ICONS
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import WeekendIcon from '@mui/icons-material/Weekend';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AccountCircle, Settings, ExitToApp } from '@mui/icons-material';
//Componentes
import DailyAdvice from '../DailyAdvice';
import Slider from '../Task&HabitSlide';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const pages = ['Blog'];

const settings = ['Perfil', 'Configuración', 'Cerrar Sesión'];

export default function StickyFooter() {

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    auth.logout();
    navigate('/login');
  }

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuAction = (action) => {
    switch (action) {
      case 'Perfil':
        navigate('/user-profile');
        break;
      case 'Cerrar Sesión':
        handleLogout();
        break;
      case 'Configuración':
        navigate('/user-settings');
        break;
      default:
        // Acción predeterminada o manejo de otros elementos del menú
        break;
    }
  
    // Cierra el menú
    handleCloseUserMenu();
  };

  return (
    <ThemeProvider theme={themeOptionDark}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: 'url(/backgrounddarkpurple.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <AppBar 
          position="static"
          sx={{
            backgroundImage: 'url(/backgrounddarkpurple.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home-screen"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'roboto',
                  fontWeight: 700,
                  letterSpacing: '.0rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                FOCUS APP
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <HomeIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/home-screen"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'roboto',
                  fontWeight: 700,
                  letterSpacing: '.0rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                FOCUS APP
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={() => handleMenuAction(setting)}>
                        {setting === 'Perfil' ? <AccountCircle color='primary' sx={{mr: 2}} /> : null}
                        {setting === 'Configuración' ? <Settings color='primary' sx={{mr: 2}} /> : null}
                        {setting === 'Cerrar Sesión' ? <ExitToApp color='secondary' sx={{mr: 2}} /> : null}
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem> 
                    ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              mt: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DailyAdvice/>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Slider/>
            </Box>
          </Grid>
        </Grid>

        <AppBar 
          position="fixed"
          color="primary"
          elevation={12}
          sx={{
            top: 'auto',
            bottom: 0,
            backgroundImage: 'url(/backgrounddarkpurple.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
        <Toolbar>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      </Box>
    </ThemeProvider>
  );
}
