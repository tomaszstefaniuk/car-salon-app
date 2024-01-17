import { FC } from 'react';
import { ImageCarouselMobileComponent } from './ImageCarouselMobileComponent';
import { CARS } from '~/constants/cars';

export const ImageCarouselMobileContainer: FC = () => {
  return <ImageCarouselMobileComponent slides={CARS} />;
};
