import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

export const CarouselSubsection: FC<Props> = ({ title, subtitle }) => {
  return (
    <Box sx={{ width: 140 }}>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: 'center',
          color: 'black.main',
          marginTop: 4,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: 'center',
            color: 'black.main',
            marginTop: 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
