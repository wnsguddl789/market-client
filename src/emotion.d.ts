import '@emotion/react';
import { themeType } from './utils/theme/type';

declare module '@emotion/react' {
  export interface Theme {
    size: themeType['size'];
    color: themeType['color'];
    width: themeType['width'];
  }
}
