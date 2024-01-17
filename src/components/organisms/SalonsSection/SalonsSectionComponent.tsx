import { Box } from '@mui/material';
import { FC } from 'react';
import carSalons1Image from '~/assets/images/car-salons-1.png';
import carSalons2Image from '~/assets/images/car-salons-2.png';
import carSalons3Image from '~/assets/images/car-salons-3.png';
import { Container } from '~/components/atoms';
import { TextOverlayImage } from '~/components/molecules';

export const SalonsSectionComponent: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'black.dark' }}>
      <Container>
        <Box height="fit-content">
          <TextOverlayImage
            fromSide="right"
            imageSrc={carSalons1Image}
            title="Technologia"
            description="Poczuj pełną wolność jazdy dzięki licznym innowacjom."
            buttonTitle="Umów jazdę próbną"
          />
          <TextOverlayImage
            fromSide="left"
            imageSrc={carSalons2Image}
            title="Potęga Designu"
            description="Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem."
            buttonTitle="Umów jazdę próbną"
          />
          <TextOverlayImage
            fromSide="right"
            imageSrc={carSalons3Image}
            title="Design wnętrza"
            description="Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY."
            buttonTitle="Umów jazdę próbną"
          />
          <Box sx={{ paddingBottom: { xs: 16, md: 0 } }} />
        </Box>
      </Container>
    </Box>
  );
};
