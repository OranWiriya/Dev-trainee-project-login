import { createTheme } from '@mui/material';
import colors from '@/theme/color';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.auroraGreen,
      light: colors.aquamarine,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.indigoDye,
      contrastText: colors.white,
    },
    error: {
      main: colors.error,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        outlined: {
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '24px',
          '&, :focus, :hover': {
            border: `2px solid ${colors.auroraGreen}`,
          },
        },
        contained: {
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '24px',
          textTransform: 'none',
        },
        text: {
          fontSize: 16,
          fontWeight: 600,
          '&, :focus, :hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
