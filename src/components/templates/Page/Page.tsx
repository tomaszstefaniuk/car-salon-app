import { Box } from '@mui/material';
import { FC } from 'react';
import {
  CarsSection,
  Footer,
  FormSection,
  Header,
  OfferSection,
  SalonsSection,
  TestDriveSection,
} from '~/components/organisms';
import { HEADER_HEIGHT } from '~/styles/theme';

export const Page: FC = () => {
  return (
    <Box>
      <Header />
      <Box marginTop={`${HEADER_HEIGHT}px`} />
      <CarsSection />
      <TestDriveSection />
      <OfferSection />
      <SalonsSection />
      <FormSection />
      <Footer />
    </Box>
  );
};
