import {
  Box,
  Button,
  Link,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC } from 'react';

type Props = {
  fromSide: 'left' | 'right';
  imageSrc: string;
  title: string;
  description: string;
  buttonTitle: string;
  sx?: SxProps;
};

export const TextOverlayImage: FC<Props> = ({
  fromSide = 'left',
  imageSrc,
  title,
  description,
  buttonTitle,
}) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  let flexDirection = fromSide === 'right' ? 'row' : 'row-reverse';
  let left: number | string = -80;
  let right = fromSide === 'right' ? 'unset' : -80;
  if (isMobile) {
    flexDirection = 'column';
    left = fromSide === 'left' ? 'unset' : 0;
    right = fromSide === 'right' ? 'auto' : 0;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection,
        paddingY: 16,
      }}
    >
      <Box
        component="img"
        loading="lazy"
        src={imageSrc}
        sx={{
          width: { xs: '100%', md: '50%' },
        }}
      />
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '50%' },
          minHeight: { xs: 0, md: 'unset' },
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left,
            right,
            top: { xs: -50, md: 'unset' },
            paddingLeft: { xs: 0, md: 12 },
            zIndex: 99,
            backgroundColor: 'black.dark',
            width: { xs: '90%', md: 'unset' },
          }}
        >
          <Typography
            variant="body1"
            color="white.main"
            sx={{ marginTop: { xs: 1, md: 0 } }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            color="white.main"
            sx={{ marginTop: 1, marginBottom: 6, maxWidth: 460 }}
          >
            {description}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              minWidth: 'fit-content',
              marginBottom: 6,
            }}
          >
            <Link href="#form-section" color="inherit">
              {buttonTitle}
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
