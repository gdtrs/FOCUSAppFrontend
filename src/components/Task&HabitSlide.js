import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative, Navigation } from 'swiper/modules';

// Importa los componentes de Material-UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Slider = () => {
  return (
    <Swiper
    grabCursor={true}
    effect={'creative'}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }}
    modules={[EffectCreative]}
    className="mySwiper"
  >
    <SwiperSlide>
        <Card 
            sx={{
                borderRadius: 5,
                ml: 5,
                mr: 5,
                height: 500
            }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Lista de Recordatorios o Pendientes
            </Typography>
            <Typography variant="body2">
              This is the content of Slide 3. You can customize it with Material-UI components.
            </Typography>
          </CardContent>
        </Card>
    </SwiperSlide>
    <SwiperSlide>
        <Card
            sx={{
                borderRadius: 5,
                ml: 5,
                mr: 5,
                height: 500
            }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Lista de Habitos
            </Typography>
            <Typography variant="body2">
              This is the content of Slide 3. You can customize it with Material-UI components.
            </Typography>
          </CardContent>
        </Card>
    </SwiperSlide>
    <SwiperSlide>
        <Card
            sx={{
                borderRadius: 5,
                ml: 5,
                mr: 5,
                height: 500
            }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Camara de Relajacion
            </Typography>
            <Typography variant="body2">
              This is the content of Slide 3. You can customize it with Material-UI components.
            </Typography>
          </CardContent>
        </Card>
    </SwiperSlide>
  </Swiper>
  );
};

export default Slider;
