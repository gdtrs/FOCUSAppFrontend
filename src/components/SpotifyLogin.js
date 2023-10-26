import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function SpotifyLogin() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [authorizationCode, setAuthorizationCode] = useState(null);
  const [nickname, setNickname] = useState(null);

  const handleURL = async () => {
    try {
      const firebaseAuthenticationId = auth.user.uid;
      debugger
      const response = await axios.get(
        `http://localhost:8000/users_service/get_by_firebase_id/${firebaseAuthenticationId}`
      );

      if (response.status === 200) {
        if (response.data && response.data.nickname) {
          const userNickname = response.data.nickname;
          const loginUrlResponse = await axios.post('http://localhost:8000/spotify_service/get_login_url', {
            nickname: userNickname
          });

          if (loginUrlResponse.status === 200) {
            const loginUrl = loginUrlResponse.data;

            console.log(loginUrl);
            // Obtener authorizationCode de loginUrl
            const code = new URLSearchParams(loginUrl.split('?')[1]).get('code');
            setAuthorizationCode(code);
          }
        }
      }
    } catch (error) {
      debugger
      console.error('Error al verificar los datos del usuario:', error);
    }
  };

  useEffect(() => {
    // Verificar si el usuario está autorizado al cargar la página
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      // Aquí puedes manejar la respuesta del login_webhook
      setAuthorizationCode(code);
      setNickname(state);
      handleLoginWebhook(code, state);
    }
  }, [authorizationCode, nickname]);

  const handleLoginWebhook = async (code, state) => {
    try {
      const loginWebhookResponse = await axios.get(
        `http://localhost:8000/spotify_service/login_webhook?code=${code}&state=${state}`
      );

      if (loginWebhookResponse.status === 200) {
        
      }
    } catch (error) {
      console.error('Error en el login_webhook:', error);
    }
  };

  return (
    <div>
      <header>
        <Button
          className='animate__animated animate__zoomIn'
          onClick={handleURL}
          variant="contained"
          color='secondary'
          sx={{
            backgroundColor: '#1db954'
          }}
        >
          <img src='/spotify.svg' width='24' style={{ marginRight: 10 }} />
          Iniciar Sesión con Spotify
        </Button>
      </header>
    </div>
  );
}

export default SpotifyLogin;


