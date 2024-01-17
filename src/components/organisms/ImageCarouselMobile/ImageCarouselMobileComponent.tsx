import { Box } from '@mui/material';
import { FC } from 'react';
import Slider from 'react-slick';
import { Slide } from '~/components/molecules';
import { CarouselItem } from '~/types/carouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  slides: CarouselItem[];
};

export const ImageCarouselMobileComponent: FC<Props> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <Slide
              key={slide.name}
              title={slide.title}
              image={slide.imageSmall}
              imageAlt={slide.imageAlt}
              subtitle={slide.subtitle}
              firstSectionTitle={slide.firstSection}
              secondSectionTitle={slide.secondSection.title}
              secondSectionSubtitle={slide.secondSection.subtitle}
              thirdSectionTitle={slide.thirdSection.title}
              thirdSectionSubtitle={slide.thirdSection.subtitle}
              buttonTitle="Umów jazdę próbną"
            />
          );
        })}
      </Slider>
    </Box>
  );
};
