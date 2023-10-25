import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function SpotifyLogin() {
  const auth = useAuth();

  const handleURL = async () => {
    try {
      const firebaseAuthenticationId = auth.user.uid;

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

            // Redirigir al usuario a la URL generada por la API de Spotify
            window.location.href = loginUrl;
          }
        }
      }
    } catch (error) {
      console.error('Error al verificar los datos del usuario:', error);
    }
  };

  // Este efecto se ejecutará cuando el componente se monte (cargue)
  useEffect(() => {
    // Verificar si el usuario está autorizado al cargar la página
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    const nickname = urlParams.get('state');

    if (authorizationCode && nickname) {
      // Aquí puedes manejar la respuesta del login_webhook
      handleLoginWebhook(authorizationCode, nickname);
    }
  }, []);

  const handleLoginWebhook = async (code, state) => {
    try {
      const loginWebhookResponse = await axios.get(
        `http://localhost:8000/spotify_service/login_webhook?code=${code}&state=${state}`
      );

      if (loginWebhookResponse.status === 200) {
        // Redirigir a la página principal u otra página según sea necesario
        // Puedes utilizar react-router o window.location.href para hacer esto.
      }
    } catch (error) {
      console.error('Error en el login_webhook:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          className="btn-spotify"
          onClick={handleURL}
          variant="contained"
          color="primary"
        >
          Login with Spotify
        </Button>
      </header>
    </div>
  );
}

export default SpotifyLogin;

