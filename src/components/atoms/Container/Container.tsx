import { Container as MuiContainer, SxProps } from '@mui/material';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  sx?: SxProps;
};

export const Container: FC<Props> = ({ children, sx }) => {
  return (
    <MuiContainer
      maxWidth="xxl"
      disableGutters
      sx={{ paddingX: { xs: 4, md: 8, xxl: 2 }, ...sx }}
    >
      {children}
    </MuiContainer>
  );
};
