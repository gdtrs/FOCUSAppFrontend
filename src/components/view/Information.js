import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Tooltip,
  Grid,
  Typography,
} from '@mui/material';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ArrowBackIosRounded from '@mui/icons-material/ArrowBackIosRounded';
import { ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { themeOptionDark } from './Welcome';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
/* import '../../index.css'; */
/*import '../../infocardstyles.css';*/
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
          backgroundImage: 'url(/backgroundhomescreen.png)',
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
              <HelpCenterIcon sx={{ width: 60, height: 60 }} />
            </Avatar>
            <Typography component="h1" variant="h2" sx={{ color: '#fff' }}>
              INFORMACIÓN
            </Typography>
          </Box>
          </Container>
          <Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                {/* Primer slide */}
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Card
                      className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                      sx={{
                        fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                        background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                        '@media (max-width: 481px)': {
                          height: 425,
                          mb: 8,
                        },
                        '@media (max-width: 899px)': {
                          height: 400,
                          mb: 8,
                        },
                      }}
                    >
                      ¿Qué es el TDAH?
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card
                      className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                      sx={{
                        fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                        background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                        '@media (max-width: 481px)': {
                          height: 425,
                          mb: 8,
                        },
                        '@media (max-width: 899px)': {
                          height: 400,
                          mb: 8,
                        },
                      }}
                    >
                      Es un trastorno mental que comprende una combinación de problemas persistentes,
                      como dificultad para prestar atención, hiperactividad y conducta impulsiva.
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </Grid>
              {/* Primer slide */}

              {/* Segundo slide */}
              <Grid item xs={12} sm={6} md={4}>
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Card
                      className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                      sx={{
                        fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                        background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                        '@media (max-width: 481px)': {
                          height: 425,
                          mb: 8,
                        },
                        '@media (max-width: 899px)': {
                          height: 400,
                          mb: 8,
                        },
                      }}
                    >
                      ¿Cuáles son los síntomas del TDAH?
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card
                      className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                      sx={{
                        fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                        background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                        '@media (max-width: 481px)': {
                          height: 425,
                          mb: 8,
                        },
                        '@media (max-width: 899px)': {
                          height: 400,
                          mb: 8,
                        },
                      }}
                    >
                      Los síntomas principales del TDAH son la inatención,
                      la hiperactividad y la impulsividad.
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </Grid>
              {/* Segundo slide */}

              {/* Tercer slide */}
              <Grid item xs={12} sm={6} md={4}>
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Card
                      className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                      sx={{
                        fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                        background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                        '@media (max-width: 481px)': {
                          height: 425,
                          mb: 8,
                        },
                        '@media (max-width: 899px)': {
                          height: 400,
                          mb: 8,
                        },
                      }}
                    >
                      ¿Cuál es la causa del TDAH?
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card
                      className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                      sx={{
                        fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                        background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                        '@media (max-width: 481px)': {
                          height: 425,
                          mb: 8,
                        },
                        '@media (max-width: 899px)': {
                          height: 400,
                          mb: 8,
                        },
                      }}
                    >
                      La causa exacta del TDAH aún no se conoce,
                      pero se cree que es el resultado de una combinación de factores genéticos,
                      neurobiológicos y ambientales .
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </Grid>
              {/* Tercer slide */}


              {/* Cuarto slide */}
              <Grid item xs={12} sm={6} md={4}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    ¿El TDAH sólo afecta a los niños?
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    No, el TDAH puede afectar tanto a niños como a adultos.
                    Aunque los síntomas pueden cambiar con la edad,
                    el trastorno puede persistir en la vida adulta.
                  </Card>
                </SwiperSlide>
              </Swiper>
              </Grid>
              {/* Cuarto slide */}

              {/* Quinto slide */}
              <Grid item xs={12} sm={6} md={4}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                      fontWeight: "bold",
                      fontSize: 40,
                      borderRadius: 5,
                      display: 'flex',
                      padding: 2.5,
                      alignItems: 'center',
                      textAlign: "center",
                      mb: 8,
                      mr: 3,
                      ml: 3,
                      height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    ¿Cómo se diagnostica el TDAH?
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                      fontWeight: "bold",
                      fontSize: 20,
                      borderRadius: 5,
                      display: 'flex',
                      padding: 2.5,
                      alignItems: 'center',
                      textAlign: "center",
                      mb: 8,
                      mr: 3,
                      ml: 3,
                      height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    El diagnóstico del TDAH se basa en la evaluación clínica de los síntomas y
                    el descarte de otras posibles causas.
                    No existe una prueba única para diagnosticar el TDAH.
                  </Card>
                </SwiperSlide>
              </Swiper>
              </Grid>
              {/* Quinto slide */}

              {/* Sexto slide */}
              <Grid item xs={12} sm={6} md={4}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                      fontWeight: "bold",
                      fontSize: 40,
                      borderRadius: 5,
                      display: 'flex',
                      padding: 2.5,
                      alignItems: 'center',
                      textAlign: "center",
                      mb: 8,
                      mr: 3,
                      ml: 3,
                      height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    ¿Cuál es el tratamiento para el TDAH?
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                      fontWeight: "bold",
                      fontSize: 20,
                      borderRadius: 5,
                      display: 'flex',
                      padding: 2.5,
                      alignItems: 'center',
                      textAlign: "center",
                      mb: 8,
                      mr: 3,
                      ml: 3,
                      height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    El tratamiento del TDAH puede incluir terapia conductual,
                    terapia cognitivo-conductual, medicación y apoyo educativo.
                    El enfoque del tratamiento puede variar según las necesidades individuales.

                  </Card>
                </SwiperSlide>
              </Swiper>
              </Grid>
              {/* Sexto slide */}

              {/* Sétimo slide */}
              <Grid item xs={12} sm={6} md={4}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                      fontWeight: "bold",
                      fontSize: 40,
                      borderRadius: 5,
                      display: 'flex',
                      padding: 2.5,
                      alignItems: 'center',
                      textAlign: "center",
                      mb: 8,
                      mr: 3,
                      ml: 3,
                      height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    ¿El TDAH se puede curar?
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    No hay una cura conocida para el TDAH, pero con el tratamiento adecuado y
                    el apoyo adecuado, las personas con TDAH pueden aprender a manejar sus síntomas y
                    llevar una vida plena y productiva.


                  </Card>
                </SwiperSlide>
              </Swiper>
              </Grid>
              {/* Sétimo slide */}

              {/* Octavo slide */}
              <Grid item xs={12} sm={6} md={4}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    ¿El TDAH se puede prevenir?
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    No se puede prevenir el TDAH, ya que su causa exacta no se conoce.
                    Sin embargo, se pueden tomar medidas para reducir los factores de riesgo
                    y promover un entorno saludable para el desarrollo de los niños.
                  </Card>
                </SwiperSlide>
              </Swiper>
              </Grid>
              {/* Octavo slide */}

              {/* Noveno slide */}
              <Grid item xs={12} sm={6} md={4}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                      fontWeight: "bold",
                      fontSize: 40,
                      borderRadius: 5,
                      display: 'flex',
                      padding: 2.5,
                      alignItems: 'center',
                      textAlign: "center",
                      mb: 8,
                      mr: 3,
                      ml: 3,
                      height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    ¿El TDAH afecta el rendimiento académico?
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    Sí, el TDAH puede afectar el rendimiento académico debido a los problemas de atención y
                    concentración. Sin embargo, con el apoyo adecuado,
                    los estudiantes con TDAH pueden tener éxito en la escuela.
                  </Card>
                </SwiperSlide>
              </Swiper>
              </Grid>
              {/* Noveno slide */}

              {/* Décimo slide */}
              <Grid item xs={12} sm={6} md={4}>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 40,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    ¿El TDAH es lo mismo que la hiperactividad?
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card
                    className='animate__animated animate__zoomIn animate__faster animate__delay-0.5s'
                    sx={{
                      fontfamily: "roboto",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 5,
                        display: 'flex',
                        padding: 2.5,
                        alignItems: 'center',
                        textAlign: "center",
                        mb: 8,
                        mr: 3,
                        ml: 3,
                        height: 300,
                      background: 'linear-gradient(360deg, #772fa8, #c471ed)',
                      '@media (max-width: 481px)': {
                        height: 425,
                        mb: 8,
                      },
                      '@media (max-width: 899px)': {
                        height: 400,
                        mb: 8,
                      },
                    }}
                  >
                    No, aunque la hiperactividad es uno de los síntomas del TDAH,
                    el trastorno abarca más que solo la hiperactividad.
                    También incluye problemas de atención e impulsividad.
                  </Card>
                </SwiperSlide>
              </Swiper>
              </Grid>
              {/* Décimo slide */}
            </Grid>
          </Box>
        
      </Box>
    </ThemeProvider>
  );
}