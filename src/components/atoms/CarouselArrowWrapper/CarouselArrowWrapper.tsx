import { IconButton, SxProps } from '@mui/material';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  sx?: SxProps;
};

export const CarouselArrowWrapper: FC<Props> = ({ onClick, children, sx }) => {
  return (
    <IconButton
      onClick={onClick}
      disableRipple
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'white.main',
        height: '50px',
        width: '50px',
        borderRadius: 0,
        zIndex: 99,
        ...sx,
      }}
    >
      {children}
    </IconButton>
  );
};
