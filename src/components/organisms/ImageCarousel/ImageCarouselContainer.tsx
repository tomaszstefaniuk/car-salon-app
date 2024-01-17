import { FC } from 'react';
import { ImageCarouselComponent } from './ImageCarouselComponent';
import { CAROUSEL_ITEMS } from '~/constants/carouselItems';

const SLIDE_WIDTH = 1050;

export const ImageCarouselContainer: FC = () => {
  return (
    <ImageCarouselComponent slides={CAROUSEL_ITEMS} slideWidth={SLIDE_WIDTH} />
  );
};
