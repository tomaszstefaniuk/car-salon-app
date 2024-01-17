import { Box, Divider, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import { Container, InstagramIcon, VimeoIcon } from '~/components/atoms';

type Props = {
  height: number;
};

export const FooterComponent: FC<Props> = ({ height }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white.main',
        borderTop: '1px solid',
        borderColor: 'grey.main',
        height: `${height}px`,
      }}
    >
      <Container sx={{ height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'space-around', md: 'space-between' },
            alignItems: 'center',
            height: '100%',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Typography variant="subtitle1" color="black.light">
            SEAT CUPRA S.A.U. 2022 ®
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="subtitle1" color="black.light">
              Obowiązek informacyjny
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginX: 2 }}
              color="divider"
            />
            <Typography variant="subtitle1" color="black.light">
              Polityka cookies
            </Typography>
          </Box>
          <Box>
            <IconButton disableRipple>
              <InstagramIcon />
            </IconButton>
            <IconButton disableRipple>
              <VimeoIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
