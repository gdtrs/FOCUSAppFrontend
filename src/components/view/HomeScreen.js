import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Toolbar, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { themeOptionDark } from './Welcome';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function StickyFooter() {

  const auth = useAuth();
  const {displayName} = auth.user;
  const navigate = useNavigate();

  const handleLogout = (e) => {
    auth.logout();
    navigate('/login');
  }

  return (
    <ThemeProvider theme={themeOptionDark}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                FOCUS APP
                </Typography>
                <Box sx={{ flexGrow: 1 }} /> {/* Espacio en blanco para empujar los elementos al lado derecho */}
                <Typography variant="body1" color="inherit" noWrap>
                {displayName}
                </Typography>
                <IconButton color='secondary' onClick={handleLogout} sx={{ ml: 1}}>
                    <LogoutIcon/>
                </IconButton>
            </Toolbar>
            </AppBar>
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
