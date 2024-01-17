import cupraAtecaSmall from '~/assets/images/cupra-ateca-small.png';
import cupraAteca from '~/assets/images/cupra-ateca.png';
import cupraBornSmall from '~/assets/images/cupra-born-small.png';
import cupraBorn from '~/assets/images/cupra-born.png';
import cupraFormentorSmall from '~/assets/images/cupra-formentor-small.png';
import cupraFormentorVZ from '~/assets/images/cupra-formentor-vz.png';
import cupraFormentor from '~/assets/images/cupra-formentor.png';
import leonSmall from '~/assets/images/leon-small.png';
import leonSportstourerSmall from '~/assets/images/leon-sportstourer-small.png';
import leonSportstourer from '~/assets/images/leon-sportstourer.png';
import leon from '~/assets/images/leon.png';
import { CarouselItem } from '~/types/carouselItem';

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    name: 'cupraFormentor',
    title: 'CUPRA Formentor',
    image: cupraFormentor,
    imageSmall: cupraFormentorSmall,
    imageAlt: 'CUPRA Formentor Image',
    subtitle: 'Maksymalna prędkość: 204 KM/H Moc silnika: 150 KM',
    firstSection: 'Dostępny w leasingu z 0% opłaty własnej',
    secondSection: { title: 'Rata netto/mies. od*', subtitle: '1439 zł' },
    thirdSection: { title: 'Cena brutto już od', subtitle: '127 800 zł' },
  },
  {
    name: 'cupraFormentorVZ',
    title: 'CUPRA Formentor VZ',
    image: cupraFormentorVZ,
    imageSmall: cupraFormentorVZ,
    imageAlt: 'CUPRA Formentor VZ Image',
    subtitle: 'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM',
    firstSection: 'Dostępny w leasingu z 0% opłaty własnej',
    secondSection: { title: 'Rata netto/mies. od*', subtitle: '1553 zł' },
    thirdSection: { title: 'Cena brutto już od', subtitle: '152 400 zł' },
  },
  {
    name: 'cupraAteca',
    title: 'CUPRA Ateca',
    image: cupraAteca,
    imageSmall: cupraAtecaSmall,
    imageAlt: 'CUPRA Ateca Image',
    subtitle: 'Maksymalna prędkość: 247 KM/H Moc silnika: 300 KM',
    firstSection: 'Dostępny w leasingu z 0% opłaty własnej',
    secondSection: { title: 'Rata netto/mies. od*', subtitle: '2334 zł' },
    thirdSection: { title: 'Cena brutto już od', subtitle: '220 700 zł' },
  },
  {
    name: 'cupraBorn',
    title: 'Nowa CUPRA Born',
    image: cupraBorn,
    imageSmall: cupraBornSmall,
    imageAlt: 'CUPRA Born Image',
    subtitle: 'Akumulator 58 kWh moc do 204 KM²',
    firstSection: 'Dostępny w leasingu z 0% opłaty własnej',
    secondSection: { title: 'Rata netto/mies. od*', subtitle: '1943 zł' },
    thirdSection: { title: 'Cena brutto już od', subtitle: '179 600 zł' },
  },
  {
    name: 'leon',
    title: 'Leon',
    image: leon,
    imageSmall: leonSmall,
    imageAlt: 'Leon Image',
    subtitle: 'Maksymalna prędkość: 245 KM/H Moc silnika: 300 KM',
    firstSection: 'Dostępny w leasingu z 0% opłaty własnej',
    secondSection: { title: 'Rata netto/mies. od*', subtitle: '1553 zł' },
    thirdSection: { title: 'Cena brutto już od', subtitle: '152 400 zł' },
  },
  {
    name: 'leonSportstourer',
    title: 'Leon Sportstourer',
    image: leonSportstourer,
    imageSmall: leonSportstourerSmall,
    imageAlt: 'Leon Sportstourer Image',
    subtitle: 'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM',
    firstSection: 'Dostępny w leasingu z 0% opłaty własnej',
    secondSection: { title: 'Rata netto/mies. od*', subtitle: '1601 zł' },
    thirdSection: { title: 'Cena brutto już od', subtitle: '156 200  zł' },
  },
];
