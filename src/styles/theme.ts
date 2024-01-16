import { createTheme } from '@mui/material';
import { hexToRgba } from '~/utils/hexToRgba';
import './fonts.css';

declare module '@mui/material/styles' {
  interface Palette {
    whiteDark: Palette['primary'];
    blackLight: Palette['primary'];
  }

  interface PaletteOptions {
    whiteDark?: PaletteOptions['primary'];
    blackLight?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    whiteDark: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blackLight: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const palette = {
  whiteDark: {
    main: '#F5F5F5',
  },
  blackLight: {
    main: '#242221',
  },
  primary: {
    main: '#190F14',
    dark: hexToRgba('#190F14', 0.8),
  },
  secondary: {
    main: '#DBD3CB',
    contrastText: '#000',
  },
};

const borderRadius = '0';

export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
});
theme = createTheme(theme, {
  palette,
  typography: {
    fontSize: 26,
    body1: {
      lineHeight: '26px',
      fontWeight: 300,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Inter',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Inter',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          textTransform: 'none',
          borderRadius,
          fontSize: '1rem', // 16px
          fontWeight: 400,
          height: 48,
          padding: '0 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        text: {
          margin: 0,
          padding: 0,
          '&:hover': {
            background: 'unset',
            textDecoration: 'underline',
          },
          '&:active': {
            opacity: 0.8,
          },
        },
      },
    },
  },
});
