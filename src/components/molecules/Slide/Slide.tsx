import { Box, Button, Link, Typography } from '@mui/material';
import { FC } from 'react';
import { CarouselSubsection } from '~/components/atoms';

type Props = {
  width?: number;
  title: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  firstSectionTitle: string;
  secondSectionTitle: string;
  secondSectionSubtitle: string;
  thirdSectionTitle: string;
  thirdSectionSubtitle: string;
  buttonTitle: string;
};

export const Slide: FC<Props> = ({
  width,
  title,
  image,
  imageAlt,
  subtitle,
  firstSectionTitle,
  secondSectionTitle,
  secondSectionSubtitle,
  thirdSectionTitle,
  thirdSectionSubtitle,
  buttonTitle,
  ...rest
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingX: { xs: 5, md: 25 },
        paddingY: { xs: 5, md: 12.5 },
        position: 'relative',
        minWidth: width || 'unset',
        maxWidth: width || 'unset',
      }}
      {...rest}
    >
      <Typography
        variant="h2"
        color="black.main"
        textAlign="center"
        fontSize="3rem"
        fontWeight={400}
        lineHeight="52px"
        marginBottom={8}
      >
        {title}
      </Typography>
      <Box
        component="img"
        src={image}
        alt={imageAlt}
        sx={{ width: 'auto', height: { xs: 130, sm: 220, md: 260 } }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: 'center',
          color: 'black.main',
          marginTop: 4,
          wrap: 'wrap',
          marginX: 'auto',
          maxWidth: { xs: 300, md: 'unset' },
        }}
      >
        {subtitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          maxWidth: { xs: 'unset', md: 520 },
          marginX: 'auto',
          alignItems: { xs: 'center', md: 'unset' },
        }}
      >
        <CarouselSubsection title={firstSectionTitle} />
        <CarouselSubsection
          title={secondSectionTitle}
          subtitle={secondSectionSubtitle}
        />
        <CarouselSubsection
          title={thirdSectionTitle}
          subtitle={thirdSectionSubtitle}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          minWidth: 'fit-content',
          display: 'block',
          marginX: 'auto',
          marginTop: 6,
        }}
      >
        <Link href="#form-section" color="inherit">
          {buttonTitle}
        </Link>
      </Button>
    </Box>
  );
};
