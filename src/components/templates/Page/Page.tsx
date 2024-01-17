import { Box, Theme, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import {
  CarsSection,
  Footer,
  FormSection,
  Header,
  ImageCarousel,
  ImageCarouselMobile,
  SalonsSection,
  TestDriveSection,
} from '~/components/organisms';
import { HEADER_HEIGHT } from '~/styles/theme';

export const Page: FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xl')
  );

  return (
    <Box>
      <Header isMobile={isMobile} />
      <Box marginTop={`${HEADER_HEIGHT}px`} />
      <CarsSection />
      <TestDriveSection />
      <Box id="offer-section" sx={{ backgroundColor: 'white.dark' }}>
        {isMobile ? <ImageCarouselMobile /> : <ImageCarousel />}
        {isMobile && <Box sx={{ height: '40px' }} />}
      </Box>
      <SalonsSection />
      <FormSection />
      <Box sx={{ width: '100%', height: '16px' }} />
      <Footer />
    </Box>
  );
};
