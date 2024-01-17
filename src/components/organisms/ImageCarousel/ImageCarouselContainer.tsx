import { FC } from 'react';
import { ImageCarouselComponent } from './ImageCarouselComponent';
import { CARS } from '~/constants/cars';

const SLIDE_WIDTH = 1050;

export const ImageCarouselContainer: FC = () => {
  return <ImageCarouselComponent slides={CARS} slideWidth={SLIDE_WIDTH} />;
};
