import { Box, Typography, Button } from '@mui/material';
import { FC } from 'react';
import carBgImage from '~/assets/images/car-bg.png';
import { Container } from '~/components/atoms';

export const CarsSectionComponent: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${carBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 8, md: 2 },
          }}
        >
          <Typography variant="h3" color="white.main" sx={{ opacity: '.5' }}>
            CUPRA Formentor
          </Typography>
          <Typography variant="h2" color="white.main" maxWidth={800}>
            Wejdź do świata Cupra. Poznaj prawdziwą moc i sportowego ducha
            marki.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: { xs: '100%', md: 'unset' },
              maxWidth: 400,
              alignSelf: { xs: 'center', md: 'flex-start' },
              marginTop: { xs: 0, md: 8 },
            }}
          >
            Ruszaj na jazdę testową
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
