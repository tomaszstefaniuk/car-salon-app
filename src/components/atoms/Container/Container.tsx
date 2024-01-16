import { Container as MuiContainer } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiContainer
      maxWidth="xxl"
      disableGutters
      sx={{ paddingX: { xs: 4, md: 8, xxl: 2 } }}
    >
      {children}
    </MuiContainer>
  );
};
