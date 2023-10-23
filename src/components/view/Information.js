import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Container,
  Tooltip,
  Typography,
} from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';
import ArrowBackIosRounded from '@mui/icons-material/ArrowBackIosRounded';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptionDark } from './Welcome';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
/* import '../../index.css'; */
/* import '../../infocardstyles.css'; */ 
import { EffectCards } from 'swiper/modules';

export default function Information() {
  

const navigate = useNavigate()
const handleBack = async () => {
  navigate('/home-screen')
}

  return (


    <ThemeProvider theme={themeOptionDark}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: 'url(/backgroundhabits.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
 <Tooltip title='Volver'>
              <ArrowBackIosRounded
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  color: 'white',
                  cursor: 'pointer',
                }}
                fontSize="large"
                onClick={handleBack}
             />
            </Tooltip>
        <Container component="main" maxWidth="xs">
        <Box
            sx={{
              marginTop: 8,
              marginBottom: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 70, height: 70 }}>
              <AssignmentIcon sx={{ width: 60, height: 60 }} />
            </Avatar>
            <Typography component="h1" variant="h2" sx={{ color: '#fff' }}>
              INFORMACIÓN
            </Typography>
          </Box>
        <Box>
        <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>¿Qué es el TDAH?</SwiperSlide>
        <SwiperSlide>¿Cuáles son los síntomas del TDAH?</SwiperSlide>
        <SwiperSlide>¿Cuál es la causa del TDAH?</SwiperSlide>
        <SwiperSlide>¿El TDAH sólo afecta a los niños?</SwiperSlide>
        <SwiperSlide>¿Cómo se diagnostica el TDAH?</SwiperSlide>
        <SwiperSlide>¿Cuál es el tratamiento para el TDAH?</SwiperSlide>
        <SwiperSlide>¿El TDAH se puede curar?</SwiperSlide>
        <SwiperSlide>¿El TDAH se puede prevenir?</SwiperSlide>
        <SwiperSlide>¿El TDAH afecta el rendimiento académico?</SwiperSlide>
        <SwiperSlide>¿El TDAH es lo mismo que la hiperactividad?</SwiperSlide>
      </Swiper>
        </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}