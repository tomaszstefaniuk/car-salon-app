import { FC } from 'react';
import { FooterComponent } from './FooterComponent';

const FOOTER_HEIGHT = 116;

export const FooterContainer: FC = () => {
  return <FooterComponent height={FOOTER_HEIGHT} />;
};
