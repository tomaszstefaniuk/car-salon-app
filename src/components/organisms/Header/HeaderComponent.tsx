import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Slide,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import { FC, useState } from 'react';
import logo from '~/assets/logo.svg';
import { NAV_ITEMS } from '~/constants';

type Props = {
  height: number;
};

export const HeaderComponent: FC<Props> = ({ height }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const trigger = useScrollTrigger();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xl')
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        sx={{
          height,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 99999,
        }}
        color="whiteDark"
      >
        <Container maxWidth="xxl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Box
              display="flex"
              sx={{
                width: '100%',
                justifyContent: { xs: 'space-between', xl: 'flex-start' },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{ width: { xs: '100px', md: 'unset' } }}
              />
              {isMobile && (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleIsMenuOpen}
                >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              )}
              {!isMobile && (
                <Box display="flex" gap="20px" marginLeft={12}>
                  {NAV_ITEMS.map((navItem) => (
                    <Button key={navItem} color="blackLight" disableRipple>
                      <Typography>{navItem}</Typography>
                    </Button>
                  ))}
                </Box>
              )}
            </Box>
            {!isMobile && (
              <Box display="flex" minWidth="fit-content">
                <Typography
                  variant="body2"
                  fontWeight="500"
                  lineHeight="26px"
                  letterSpacing=".05em"
                  marginRight={6}
                  display="flex"
                  alignItems="center"
                  noWrap
                  minWidth="fit-content"
                >
                  +48 58 506 65 65
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    marginRight: 3,
                    minWidth: 'fit-content',
                  }}
                >
                  Zapytaj o ofertę
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ minWidth: 'fit-content' }}
                >
                  Umów jazdę próbną
                </Button>
              </Box>
            )}
          </Toolbar>
          {isMobile && (
            <Drawer
              anchor="top"
              open={isMenuOpen}
              onClose={closeMenu}
              ModalProps={{ keepMounted: true }}
              transitionDuration={700}
            >
              <Box height="100vh" marginTop={`${height}px`}>
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {NAV_ITEMS.map((navItem) => (
                    <ListItemButton key={navItem}>{navItem}</ListItemButton>
                  ))}
                  <Divider
                    sx={{ width: '80%', marginTop: 4, marginBottom: 4 }}
                  />
                  <ListItem>
                    <Typography
                      variant="body2"
                      fontWeight="500"
                      lineHeight="26px"
                      letterSpacing=".05em"
                      marginX="auto"
                    >
                      +48 58 506 65 65
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ width: '100%', maxWidth: 400 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ marginTop: 4, marginBottom: 4 }}
                    >
                      Zapytaj o ofertę
                    </Button>
                  </ListItem>
                  <ListItem sx={{ width: '100%', maxWidth: 400 }}>
                    <Button variant="contained" color="primary" fullWidth>
                      Umów jazdę próbną
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          )}
        </Container>
      </AppBar>
    </Slide>
  );
};
