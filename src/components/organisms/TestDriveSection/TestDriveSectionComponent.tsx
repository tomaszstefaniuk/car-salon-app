import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import carTestDrive1Image from '~/assets/images/car-test-drive-1.png';
import carTestDrive1Image2 from '~/assets/images/car-test-drive-2.png';
import { Container } from '~/components/atoms';

export const TestDriveSectionComponent: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'black.dark' }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            paddingTop: { xs: 6, md: 16 },
            flexDirection: { xs: 'column', md: 'unset' },
            gap: { xs: 0, md: 4 },
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '60%' } }}>
            <Box>
              <Typography
                variant="h2"
                color="white"
                sx={{
                  textDecoration: 'uppercase',
                  marginBottom: 2,
                }}
              >
                WYPRÓBUJ
              </Typography>
              <Typography
                variant="h3"
                color="white"
                maxWidth={560}
                sx={{ opacity: '.5', marginBottom: 8 }}
              >
                Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj
                samochody, które są wyjątkowym połączeniem technologii, mocy,
                elegancji i komfortu.
              </Typography>
              <Box
                component="img"
                loading="lazy"
                src={carTestDrive1Image}
                sx={{
                  width: '100%',
                }}
              />
              <Typography
                variant="caption"
                color="white"
                sx={{ opacity: '.5' }}
              >
                Design inspirowany wyścigami, stworzony z niezwykłą dbałością o
                detale.
              </Typography>
            </Box>
            <Box sx={{ marginTop: { xs: 0, md: 20 } }}>
              <Typography
                variant="h2"
                color="white"
                sx={{
                  marginTop: { xs: 4, md: 0 },
                  textDecoration: 'uppercase',
                  marginBottom: 2,
                }}
              >
                TYLKO DLA ODWAŻNYCH
              </Typography>
              <Typography
                variant="h3"
                color="white"
                maxWidth={560}
                sx={{ opacity: '.5', marginBottom: { xs: 8, md: 0 } }}
              >
                Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny
                SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co
                najlepsze w marce CUPRA.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: { xs: '100%', md: 'unset' },
                  maxWidth: 400,
                  marginTop: { xs: 0, md: 4 },
                  marginBottom: { xs: 8, md: 16 },
                  marginX: { xs: 'auto', md: 0 },
                  display: 'block',
                }}
              >
                Umów jazdę próbną
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'unset' },
              width: { xs: '50%', md: '40%' },
              marginTop: { xs: 0, md: 36 },
              marginBottom: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              loading="lazy"
              src={carTestDrive1Image2}
              sx={{
                width: '100%',
                marginBottom: 2,
              }}
            />
            <Typography
              variant="caption"
              color="white"
              sx={{ marginLeft: { xs: 2, md: 0 }, opacity: '.5' }}
            >
              Podróżuj z rozmachem bez kompromisów.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
