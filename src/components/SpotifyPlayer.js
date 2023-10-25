import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback';
import SpotifyLogin from './SpotifyLogin';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function SpotifyWebPlayer() {

  const auth = useAuth();

  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const firebaseAuthenticationId = auth.user.uid;
  
      const response = await axios.get(
        `http://localhost:8000/users_service/get_by_firebase_id/${firebaseAuthenticationId}`
      );
  
      if (response.status === 200) {
        // Comprueba si el usuario existe en la respuesta de la API
        if (response.data && response.data.nickname) {
          const userNickname = response.data.nickname;
  
          try {
            const response = await axios.post('http://localhost:8000/spotify_service/get_access_token', {
              nickname: userNickname
            });

            const data = response.data;
  
            if (data.accessToken) {
              setToken(data.accessToken);
            } else {
              console.error('No se pudo obtener el token de acceso');
            }
          } catch (error) {
            console.error('Error al obtener el token de acceso:', error);
          }
        }
      }
    }
  
    getToken();
  }, []); // Asegúrate de que aquí esté el cierre de llave
  

  return (
    <>
      {token ? <WebPlayback token={token} /> : <SpotifyLogin />}
    </>
  );
}

export default SpotifyWebPlayer;




