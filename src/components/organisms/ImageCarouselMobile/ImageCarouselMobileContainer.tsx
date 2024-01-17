import { FC } from 'react';
import { ImageCarouselMobileComponent } from './ImageCarouselMobileComponent';
import { CAROUSEL_ITEMS } from '~/constants/carouselItems';

export const ImageCarouselMobileContainer: FC = () => {
  return <ImageCarouselMobileComponent slides={CAROUSEL_ITEMS} />;
};
