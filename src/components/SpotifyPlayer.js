import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback';
import SpotifyLogin from './SpotifyLogin';
import axios from 'axios';

function SpotifyWebPlayer() {
  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const nickname = 'usuario'; // Sustituye 'usuario' con el nombre de usuario correcto
      try {
        const response = await axios.post('http://localhost:8000/spotify_service/get_access_token', { nickname });
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

    getToken();
  }, []);

  return (
    <>
      {token ? <WebPlayback token={token} /> : <SpotifyLogin />}
    </>
  );
}

export default SpotifyWebPlayer;




