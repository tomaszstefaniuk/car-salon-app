import { useScrollTrigger } from '@mui/material';
import { FC, useState } from 'react';
import { HeaderComponent } from './HeaderComponent';

type Props = {
  isMobile: boolean;
};

export const HeaderContainer: FC<Props> = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTrigger = useScrollTrigger();

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
