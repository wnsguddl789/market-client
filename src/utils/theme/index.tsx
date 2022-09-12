import { Global, css, ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { themeType } from './type';

const theme: themeType = {
  size: {
    mobile: 'max-width: 770px',
    tabletS: 'max-width: 1023px',
    tabletM: 'max-width: 1220px',
    tabletL: 'max-width: 1280px',
    laptop: 'min-width: 1460px',
    desktop: 'min-width: 1700px',
  },
  width: {
    mobile: 770,
    tabletS: 1023,
    tabletM: 1220,
    tabletL: 1280,
    laptop: 1460,
    desktop: 1700,
  },
  color: {
    primaryColor: '#f67600',
  },
};

export const MarketThemeProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}
          body {
            /* background-color:#021012; */
          }
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }
           a {
            /* color: #f67600; */
            text-decoration: none;
            outline: none;
          }
           a:hover,
          a:active {
            text-decoration: none;
            /* color: #fff;
            background-color: #f67600; */
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};
