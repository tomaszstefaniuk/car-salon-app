import { Theme, useMediaQuery, useScrollTrigger } from '@mui/material';
import { FC, useState } from 'react';
import { HeaderComponent } from './HeaderComponent';

export const HeaderContainer: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTrigger = useScrollTrigger();
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
    <HeaderComponent
      scrollTrigger={scrollTrigger}
      isMobile={isMobile}
      isMenuOpen={isMenuOpen}
      toggleIsMenuOpen={toggleIsMenuOpen}
      closeMenu={closeMenu}
    />
  );
};
