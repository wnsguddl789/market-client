interface themeType {
  size: {
    mobile: string;
    tabletS: string;
    tabletM: string;
    tabletL: string;
    laptop: string;
    desktop: string;
  };
  width: {
    mobile: number;
    tabletS: number;
    tabletM: number;
    tabletL: number;
    laptop: number;
    desktop: number;
  };
  color: {
    primaryColor: string;
  };
}

export type { themeType };
