import { FC } from 'react';
import { HeaderComponent } from './HeaderComponent';

const HEADER_HEIGHT = 84;

export const HeaderContainer: FC = () => {
  return <HeaderComponent height={HEADER_HEIGHT} />;
};
