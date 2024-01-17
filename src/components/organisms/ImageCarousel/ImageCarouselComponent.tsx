import { Box } from '@mui/material';
import { FC, createRef } from 'react';
import Slider from 'react-slick';
import {
  CarouselArrowWrapper,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '~/components/atoms';
import { Slide } from '~/components/molecules';
import { CarItem } from '~/types/car';

type Props = {
  slides: CarItem[];
  slideWidth: number;
};

export const ImageCarouselComponent: FC<Props> = ({ slides, slideWidth }) => {
  const sliderRef = createRef<Slider>();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0',
    arrows: false,
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide) => {
          return (
            <Slide
              key={slide.name}
              width={slideWidth}
              title={slide.title}
              image={slide.image}
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
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 9,
          display: 'flex',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white.light',
            zIndex: 9,
          }}
        />
        <Box
          sx={{
            height: '100%',
            minWidth: slideWidth,
            maxWidth: slideWidth,
            position: 'relative',
          }}
        >
          <CarouselArrowWrapper
            onClick={() => sliderRef.current?.slickPrev()}
            sx={{ left: -25 }}
          >
            <ChevronLeftIcon />
          </CarouselArrowWrapper>
          <CarouselArrowWrapper
            onClick={() => sliderRef.current?.slickNext()}
            sx={{ right: -25 }}
          >
            <ChevronRightIcon />
          </CarouselArrowWrapper>
        </Box>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white.light',
            zIndex: 9,
          }}
        />
      </Box>
    </Box>
  );
};
